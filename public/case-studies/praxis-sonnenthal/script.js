/* ==========================================================================
   PRAXIS SONNENTHAL — Demo-Website
   Vanilla JS: Navigation, Scroll-Reveals, Akkordeon, Demo-Formulare,
   mehrstufige Anamnese, Consent-Hinweis. Keine externen Abhängigkeiten,
   keine Tracker, keine Datenübertragung.
   ========================================================================== */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --------------------------------------------------------------------
     Jahr im Footer
     -------------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* --------------------------------------------------------------------
     Header: Schatten/Hairline nach Scroll
     -------------------------------------------------------------------- */
  var header = document.querySelector(".header");
  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScrollHeader, { passive: true });
    onScrollHeader();
  }

  /* --------------------------------------------------------------------
     Mobile Navigation
     -------------------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navPanel = document.getElementById("nav-panel");
  if (navToggle && navPanel) {
    var closeNav = function () {
      navPanel.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", function () {
      var open = navPanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navPanel.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* --------------------------------------------------------------------
     Scroll-Reveals (IntersectionObserver)
     -------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* --------------------------------------------------------------------
     FAQ-Akkordeon (barrierearm: button + aria-expanded)
     -------------------------------------------------------------------- */
  document.querySelectorAll(".faq__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var answer = document.getElementById(btn.getAttribute("aria-controls"));
      if (!answer) return;

      btn.setAttribute("aria-expanded", String(!expanded));
      if (expanded) {
        answer.style.maxHeight = "0";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* --------------------------------------------------------------------
     Floating CTA: erst nach dem Hero sichtbar, im Kontaktbereich versteckt
     -------------------------------------------------------------------- */
  var floatCta = document.querySelector(".float-cta");
  if (floatCta) {
    // Ziel-Sektion des CTA (z. B. #kontakt oder #anamnese): dort ausblenden
    var ctaHref = floatCta.querySelector("a")?.getAttribute("href") || "";
    var target = ctaHref.indexOf("#") === 0 ? document.querySelector(ctaHref) : null;
    var contactVisible = false;

    if (target && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        contactVisible = entries[0].isIntersecting;
        updateFloat();
      }, { threshold: 0.15 }).observe(target);
    }

    var updateFloat = function () {
      var show = window.scrollY > 550 && !contactVisible;
      floatCta.classList.toggle("is-visible", show);
    };
    window.addEventListener("scroll", updateFloat, { passive: true });
    updateFloat();
  }

  /* --------------------------------------------------------------------
     Demo-Formulare: kein Versand, nur Erfolgs-Feedback
     -------------------------------------------------------------------- */
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var success = form.parentElement.querySelector(".form-success");
      if (success) {
        form.hidden = true;
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus({ preventScroll: false });
      }
    });
  });

  /* --------------------------------------------------------------------
     Mehrstufige Anamnese (Longevity) — reines Frontend-Demo
     -------------------------------------------------------------------- */
  var wizard = document.querySelector("[data-wizard]");
  if (wizard) {
    var steps = Array.prototype.slice.call(wizard.querySelectorAll(".wizard__step"));
    var bar = wizard.querySelector(".wizard__bar span");
    var stepNow = wizard.querySelector("[data-step-now]");
    var stepTitle = wizard.querySelector("[data-step-title]");
    var prevBtn = wizard.querySelector("[data-prev]");
    var nextBtn = wizard.querySelector("[data-next]");
    var current = 0;

    var labelValue = function (input) {
      var choice = input.closest(".choice");
      if (choice) return choice.textContent.trim();
      return input.value.trim();
    };

    var buildSummary = function () {
      var dl = wizard.querySelector("[data-summary]");
      if (!dl) return;
      dl.innerHTML = "";
      wizard.querySelectorAll("[data-summary-group]").forEach(function (group) {
        var values = [];
        group.querySelectorAll("input, select, textarea").forEach(function (input) {
          if (input.type === "checkbox" || input.type === "radio") {
            if (input.checked) values.push(labelValue(input));
          } else if (input.value.trim()) {
            values.push(input.value.trim());
          }
        });
        if (!values.length) return;
        var dt = document.createElement("dt");
        dt.textContent = group.getAttribute("data-summary-group");
        var dd = document.createElement("dd");
        dd.textContent = values.join(", ");
        var wrap = document.createElement("div");
        wrap.appendChild(dt);
        wrap.appendChild(dd);
        dl.appendChild(wrap);
      });
      if (!dl.children.length) {
        dl.innerHTML = "<div><dd>Keine Angaben — auch das ist in Ordnung. " +
          "Alle Fragen besprechen wir gemeinsam im Termin.</dd></div>";
      }
    };

    var validateStep = function (index) {
      var invalid = steps[index].querySelector(":invalid");
      if (invalid) {
        invalid.reportValidity();
        return false;
      }
      return true;
    };

    var render = function () {
      steps.forEach(function (step, i) {
        step.classList.toggle("is-active", i === current);
      });
      if (bar) bar.style.width = ((current + 1) / steps.length) * 100 + "%";
      if (stepNow) stepNow.textContent = current + 1;
      if (stepTitle) stepTitle.textContent = steps[current].getAttribute("data-title") || "";

      prevBtn.style.visibility = current === 0 ? "hidden" : "visible";
      var last = current === steps.length - 1;
      nextBtn.hidden = last;

      if (last) buildSummary();

      if (!reducedMotion) {
        wizard.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    nextBtn.addEventListener("click", function () {
      if (!validateStep(current)) return;
      if (current < steps.length - 1) {
        current += 1;
        render();
      }
    });
    prevBtn.addEventListener("click", function () {
      if (current > 0) {
        current -= 1;
        render();
      }
    });

    render();
  }

  /* --------------------------------------------------------------------
     Consent-Hinweis (Demo): nur localStorage, keine Cookies, keine Tracker
     -------------------------------------------------------------------- */
  var consent = document.querySelector(".consent");
  if (consent) {
    var KEY = "sonnenthal-demo-consent";
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) { /* Safari privat o. ä. */ }

    if (!stored) consent.classList.add("is-visible");

    var acceptBtn = consent.querySelector("[data-consent-ok]");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        try { localStorage.setItem(KEY, "ok"); } catch (e) { /* noop */ }
        consent.classList.remove("is-visible");
      });
    }
  }
})();
