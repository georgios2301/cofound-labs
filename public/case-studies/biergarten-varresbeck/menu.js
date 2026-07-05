/* =========================================================
   Biergarten Varresbeck — geteilter Karten-Renderer
   initMenu({ data, kind, toggles })  -> baut Filterleiste + Liste
   renderAktionen(selector, list)     -> Aktions-Band (Getränke)
   ========================================================= */
(function () {
  // diakritik-unempfindliche Normalisierung für die Suche
  function norm(s) {
    return (s || "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/ß/g, "ss");
  }
  function esc(s) {
    return (s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function priceText(p) { return p ? esc(p) + " €" : ""; }

  function badges(it) {
    var b = "";
    if (it.diet && it.diet.indexOf("vegan") > -1) b += '<span class="mbadge vegan" title="vegan">Vegan</span>';
    else if (it.diet && it.diet.indexOf("veg") > -1) b += '<span class="mbadge veg" title="vegetarisch">Vegetarisch</span>';
    if (it.frei) b += '<span class="mbadge frei" title="alkoholfrei">Alkoholfrei</span>';
    return b;
  }

  function priceBlock(it) {
    if (it.variants && it.variants.length) {
      return '<div class="mi-vars">' + it.variants.map(function (v) {
        return '<span class="mi-var">' + (v.l ? '<span class="vl">' + esc(v.l) + "</span>" : "") +
          '<span class="vp">' + priceText(v.p) + "</span></span>";
      }).join("") + "</div>";
    }
    if (it.price) return '<div class="mi-price">' + priceText(it.price) + "</div>";
    return '<div class="mi-price mi-na">&mdash;</div>';
  }

  function itemHTML(it) {
    return '<article class="mitem">' +
      '<div class="mi-main"><h3 class="mi-name">' + esc(it.name) + badges(it) + "</h3>" +
      (it.desc ? '<p class="mi-desc">' + esc(it.desc) + "</p>" : "") + "</div>" +
      priceBlock(it) + "</article>";
  }

  function renderList(container, data, items) {
    if (!items.length) { container.innerHTML = ""; return; }
    var html = "";
    data.categories.forEach(function (cat) {
      var inCat = items.filter(function (it) { return it.cat === cat.id; });
      if (!inCat.length) return;
      html += '<section class="mcat">' +
        '<div class="mcat-h"><h2>' + esc(cat.label) + "</h2>" +
        (cat.note ? '<span class="mcat-note">' + esc(cat.note) + "</span>" : "") + "</div>" +
        '<div class="mcat-items">';
      var lastGroup = null;
      inCat.forEach(function (it) {
        if (it.group && it.group !== lastGroup) {
          html += '<div class="mgroup">' + esc(it.group) + "</div>";
          lastGroup = it.group;
        }
        html += itemHTML(it);
      });
      html += "</div></section>";
    });
    container.innerHTML = html;
  }

  window.initMenu = function (opts) {
    var data = opts.data;
    var toggles = opts.toggles || [];
    var words = opts.kind === "getraenke"
      ? { s: "Getränk", p: "Getränke" } : { s: "Gericht", p: "Gerichte" };

    var chipsEl = document.getElementById("menuChips");
    var togEl = document.getElementById("menuToggles");
    var searchEl = document.getElementById("menuSearch");
    var listEl = document.getElementById("menuList");
    var countEl = document.getElementById("menuCount");
    var emptyEl = document.getElementById("menuEmpty");

    var activeCat = "alle";
    var toggleState = {};
    toggles.forEach(function (t) { toggleState[t.id] = false; });

    // Kategorie-Chips
    var chipsHtml = '<button class="chip active" data-cat="alle">Alle</button>';
    data.categories.forEach(function (c) {
      chipsHtml += '<button class="chip" data-cat="' + c.id + '">' + esc(c.label) + "</button>";
    });
    chipsEl.innerHTML = chipsHtml;

    // Toggles (vegetarisch/vegan bzw. alkoholfrei)
    togEl.innerHTML = toggles.map(function (t) {
      return '<button class="toggle" data-tg="' + t.id + '">' +
        '<span class="dot"></span>' + esc(t.label) + "</button>";
    }).join("");

    function apply() {
      var q = norm(searchEl.value);
      var items = data.items.filter(function (it) {
        if (activeCat !== "alle" && it.cat !== activeCat) return false;
        for (var i = 0; i < toggles.length; i++) {
          if (toggleState[toggles[i].id] && !toggles[i].test(it)) return false;
        }
        if (q && norm(it.name + " " + (it.desc || "")).indexOf(q) === -1) return false;
        return true;
      });
      renderList(listEl, data, items);
      countEl.textContent = items.length + " " + (items.length === 1 ? words.s : words.p);
      emptyEl.hidden = items.length > 0;
    }

    chipsEl.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      activeCat = b.dataset.cat;
      chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("active", c === b); });
      apply();
    });
    togEl.addEventListener("click", function (e) {
      var b = e.target.closest(".toggle"); if (!b) return;
      var id = b.dataset.tg;
      toggleState[id] = !toggleState[id];
      b.classList.toggle("active", toggleState[id]);
      apply();
    });
    searchEl.addEventListener("input", apply);

    apply();
  };

  window.renderAktionen = function (selector, list) {
    var el = document.querySelector(selector);
    if (!el || !list) return;
    el.innerHTML = list.map(function (a) {
      return '<div class="aktion">' +
        '<span class="ak-k">' + esc(a.k) + "</span>" +
        "<h3>" + esc(a.title) + "</h3>" +
        "<p>" + esc(a.desc) + "</p>" +
        '<div class="ak-price">' + esc(a.price) + "</div></div>";
    }).join("");
  };
})();
