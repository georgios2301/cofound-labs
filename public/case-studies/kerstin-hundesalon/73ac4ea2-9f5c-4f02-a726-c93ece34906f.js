/* ============================================================
   Kerstins Hundesalon — Interaktion
   ============================================================ */
(function () {
  'use strict';

  // ---- Daten ----
  var WHATSAPP = '4917729114861';      // 0177 29 14 861
  var MOBILE_DISPLAY = '0177 - 29 14 861';
  var PHONE_DISPLAY = '0202 - 70 55 80 73';
  var PHONE_TEL = '+4920270558073';
  var MOBILE_TEL = '+4917729114861';

  var SIZES = {
    klein:  { name: 'Kleiner Hund',  scale: 's', hours: 1, last: 17 },
    mittel: { name: 'Mittelgroßer Hund', scale: 'm', hours: 2, last: 16 },
    gross:  { name: 'Großer Hund',   scale: 'l', hours: 3, last: 15 }
  };
  function dogIcon(scale) { return '<i class="isvg" data-icon="dog" data-scale="' + scale + '"></i> '; }
  var OPEN = 9;   // 9 Uhr
  var MONTHS = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  var DOW = ['Mo','Di','Mi','Do','Fr','Sa','So'];

  // ---- State ----
  var state = { size: 'mittel', date: null, time: null };
  var viewYear, viewMonth;

  // ---- Helpers ----
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function fmtDate(d) {
    var dows = ['So','Mo','Di','Mi','Do','Fr','Sa'];
    return dows[d.getDay()] + ', ' + d.getDate() + '. ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  }
  function sameDay(a, b) { return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function isWeekday(d) { var g = d.getDay(); return g >= 1 && g <= 5; }
  function startOfToday() { var t = new Date(); t.setHours(0,0,0,0); return t; }

  // =========================================================
  //  NAV
  // =========================================================
  function initNav() {
    var nav = $('#nav');
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    });
    var toggle = $('#navToggle');
    var links = $('#navLinks');
    if (toggle) {
      toggle.addEventListener('click', function () { links.classList.toggle('open'); });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); });
      });
    }
  }

  // =========================================================
  //  CALENDAR
  // =========================================================
  function buildCalendar() {
    var grid = $('#calGrid');
    var monLabel = $('#calMonth');
    grid.innerHTML = '';
    monLabel.textContent = MONTHS[viewMonth] + ' ' + viewYear;

    var first = new Date(viewYear, viewMonth, 1);
    var startDow = (first.getDay() + 6) % 7; // Mon=0
    var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    var today = startOfToday();

    for (var i = 0; i < startDow; i++) {
      var e = document.createElement('div');
      e.className = 'cal-day empty';
      grid.appendChild(e);
    }
    for (var day = 1; day <= daysInMonth; day++) {
      var d = new Date(viewYear, viewMonth, day);
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cal-day';
      btn.textContent = day;
      var disabled = !isWeekday(d) || d < today;
      if (sameDay(d, new Date())) btn.classList.add('today');
      if (disabled) {
        btn.classList.add('disabled');
        btn.disabled = true;
      } else {
        if (sameDay(d, state.date)) btn.classList.add('selected');
        (function (dd) {
          btn.addEventListener('click', function () {
            state.date = dd;
            state.time = null;
            buildCalendar();
            buildSlots();
            updateSummary();
          });
        })(d);
      }
      grid.appendChild(btn);
    }

    // prev disabled if viewing current month or earlier
    var now = new Date();
    var prevBtn = $('#calPrev');
    prevBtn.disabled = (viewYear === now.getFullYear() && viewMonth <= now.getMonth());
  }

  function shiftMonth(delta) {
    viewMonth += delta;
    if (viewMonth < 0) { viewMonth = 11; viewYear--; }
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    buildCalendar();
  }

  // =========================================================
  //  SLOTS  (abhängig von Hundegröße / Dauer)
  // =========================================================
  function buildSlots() {
    var wrap = $('#slotsWrap');
    var grid = $('#slotsGrid');
    var hint = $('#slotsHint');
    grid.innerHTML = '';

    if (!state.date) {
      wrap.style.display = 'none';
      return;
    }
    wrap.style.display = 'block';
    var cfg = SIZES[state.size];
    hint.textContent = 'Dauer ' + cfg.hours + ' Std · letzter Start ' + cfg.last + ':00 Uhr';

    // pseudo-random aber stabile "belegt"-Slots je Tag, damit es echt wirkt
    var seed = state.date.getDate() + state.date.getMonth() * 31;
    for (var h = OPEN; h <= cfg.last; h++) {
      var slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'slot';
      var end = h + cfg.hours;
      slot.innerHTML = pad(h) + ':00<small>bis ' + pad(end) + ':00</small>';
      // einige Slots als belegt markieren
      var booked = ((h * 7 + seed) % 5 === 0);
      if (booked) {
        slot.disabled = true;
        slot.title = 'Bereits vergeben';
      } else {
        if (state.time === h) slot.classList.add('active');
        (function (hh) {
          slot.addEventListener('click', function () {
            state.time = hh;
            buildSlots();
            updateSummary();
          });
        })(h);
      }
      grid.appendChild(slot);
    }
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  // =========================================================
  //  SIZE TOGGLE
  // =========================================================
  function initSizeToggle() {
    document.querySelectorAll('.size-opt').forEach(function (opt) {
      opt.addEventListener('click', function () {
        document.querySelectorAll('.size-opt').forEach(function (o) { o.classList.remove('active'); });
        opt.classList.add('active');
        state.size = opt.dataset.size;
        state.time = null;     // Dauer ändert verfügbare Slots
        buildSlots();
        updateSummary();
      });
    });
    // size cards "buchen" buttons preselect size + scroll
    document.querySelectorAll('[data-book-size]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        var sz = b.dataset.bookSize;
        var opt = document.querySelector('.size-opt[data-size="' + sz + '"]');
        if (opt) opt.click();
        document.getElementById('buchen').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // =========================================================
  //  SUMMARY + SUBMIT
  // =========================================================
  function updateSummary() {
    var box = $('#bfSummary');
    var ok = state.date && state.time != null;
    box.classList.toggle('show', !!ok);
    if (!ok) return;
    var cfg = SIZES[state.size];
    $('#sumSize').innerHTML = dogIcon(cfg.scale) + cfg.name;
    $('#sumDur').textContent = 'ca. ' + cfg.hours + ' Std';
    if (window.renderIcons) window.renderIcons();
    $('#sumDate').textContent = fmtDate(state.date);
    $('#sumTime').textContent = pad(state.time) + ':00 – ' + pad(state.time + cfg.hours) + ':00 Uhr';
  }

  function initBookingForm() {
    $('#bookingForm').addEventListener('submit', function (e) {
      e.preventDefault();
      if (!state.date || state.time == null) {
        alert('Bitte wähle zuerst Größe, Tag und Uhrzeit aus.');
        document.getElementById('buchen').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      var cfg = SIZES[state.size];
      var name = $('#bfName').value || 'Ihr Hund';
      // Bestätigungs-Modal füllen
      $('#cfSize').innerHTML = dogIcon(cfg.scale) + cfg.name + ' (ca. ' + cfg.hours + ' Std)';
      $('#cfDate').textContent = fmtDate(state.date);
      $('#cfTime').textContent = pad(state.time) + ':00 – ' + pad(state.time + cfg.hours) + ':00 Uhr';
      openModal('confirmModal');
      if (window.renderIcons) window.renderIcons();

      // WhatsApp-Link mit vorausgefüllter Nachricht vorbereiten
      var msg = 'Hallo Kerstin, ich moechte einen Termin anfragen:%0A' +
        '- Groesse: ' + cfg.name + ' (ca. ' + cfg.hours + ' Std)%0A' +
        '- Tag: ' + fmtDate(state.date) + '%0A' +
        '- Uhrzeit: ' + pad(state.time) + ':00 Uhr%0A' +
        ($('#bfName').value ? '- Hund: ' + $('#bfName').value + '%0A' : '') +
        ($('#bfPhone').value ? '- Tel: ' + $('#bfPhone').value + '%0A' : '') +
        ($('#bfNote').value ? '- Anmerkung: ' + $('#bfNote').value : '');
      $('#cfWhatsapp').href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg).replace(/%250A/g, '%0A');
    });
  }

  // =========================================================
  //  MODALS
  // =========================================================
  function openModal(id) {
    var m = document.getElementById(id);
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(m) {
    m.classList.remove('open');
    document.body.style.overflow = '';
  }
  function initModals() {
    // open contact modal triggers
    document.querySelectorAll('[data-contact]').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); openModal('contactModal'); });
    });
    document.querySelectorAll('[data-close]').forEach(function (b) {
      b.addEventListener('click', function () { closeModal(b.closest('.modal-overlay')); });
    });
    document.querySelectorAll('.modal-overlay').forEach(function (ov) {
      ov.addEventListener('click', function (e) { if (e.target === ov) closeModal(ov); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
      }
    });
    // configure contact links
    $('#optCall').href = 'tel:' + PHONE_TEL;
    $('#optMobile').href = 'tel:' + MOBILE_TEL;
    var waMsg = 'Hallo%20Kerstin%2C%20ich%20habe%20eine%20Frage%20zu%20einem%20Termin%20f%C3%BCr%20meinen%20Hund.';
    $('#optWa').href = 'https://wa.me/' + WHATSAPP + '?text=' + waMsg;
  }

  // =========================================================
  //  REVEAL ON SCROLL
  // =========================================================
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) {
      // sofort einblenden, was bereits im Viewport liegt (z. B. Hero)
      var r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800) * 0.92) { el.classList.add('in'); }
      else { io.observe(el); }
    });
    // Ausfallsicherung: nichts bleibt je unsichtbar
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { el.classList.add('in'); });
    }, 2500);
  }

  // =========================================================
  //  INIT
  // =========================================================
  function init() {
    var now = new Date();
    viewYear = now.getFullYear();
    viewMonth = now.getMonth();

    initNav();
    initSizeToggle();
    buildCalendar();
    buildSlots();
    initBookingForm();
    initModals();
    initReveal();

    $('#calPrev').addEventListener('click', function () { shiftMonth(-1); });
    $('#calNext').addEventListener('click', function () { shiftMonth(1); });

    // set default active size
    var def = document.querySelector('.size-opt[data-size="mittel"]');
    if (def) def.classList.add('active');
  }

  // Direkt starten, falls das DOM schon geladen ist (z. B. in gebündelten
  // Offline-Dateien laufen Skripte erst nach DOMContentLoaded).
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
