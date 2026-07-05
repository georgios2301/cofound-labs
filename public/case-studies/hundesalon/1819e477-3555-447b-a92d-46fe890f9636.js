/* ============================================================
   Katrins Hundesalon — handgezeichnetes Icon-Set
   Stil: lockere Linien, runde Enden, passend zur Caveat-Schrift
   Nutzung:  <i class="isvg" data-icon="paw"></i>
   ============================================================ */
(function () {
  'use strict';

  var S = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  function svg(inner, extra) {
    return '<svg viewBox="0 0 24 24" ' + (extra || S) + '>' + inner + '</svg>';
  }

  var ICONS = {
    // gefüllte Pfote – charmant
    paw: svg(
      '<ellipse cx="12" cy="15.5" rx="4.4" ry="3.5"/>' +
      '<ellipse cx="5.7" cy="11.6" rx="1.85" ry="2.35"/>' +
      '<ellipse cx="18.3" cy="11.6" rx="1.85" ry="2.35"/>' +
      '<ellipse cx="9" cy="7.8" rx="1.75" ry="2.25"/>' +
      '<ellipse cx="15" cy="7.8" rx="1.75" ry="2.25"/>',
      'fill="currentColor"'),

    heart: svg('<path d="M12 19.5s-6.6-4.2-6.6-9C5.4 8 7.2 6.4 9.2 6.4c1.4 0 2.3.8 2.8 1.6.5-.8 1.4-1.6 2.8-1.6 2 0 3.8 1.6 3.8 4.1 0 4.8-6.6 9-6.6 9z"/>'),

    star: svg('<path d="M12 3.6l2.5 5.1 5.6.8-4.05 3.95.95 5.55L12 16.4 6.95 19l.95-5.55L3.85 9.5l5.6-.8z"/>'),

    // Badewanne + Blasen
    bath: svg(
      '<path d="M3.5 12.5h17v2a3.2 3.2 0 0 1-3.2 3.2H6.7A3.2 3.2 0 0 1 3.5 14.5z"/>' +
      '<path d="M6 17.7l-.8 2M18 17.7l.8 2"/>' +
      '<path d="M7.2 12.5V7.6A1.7 1.7 0 0 1 10 6.3"/>' +
      '<circle cx="13.4" cy="6.2" r="1"/><circle cx="16.6" cy="4.6" r=".8"/>'),

    scissors: svg(
      '<circle cx="6" cy="6.6" r="2.3"/><circle cx="6" cy="17.4" r="2.3"/>' +
      '<path d="M7.9 7.9L19.5 16.4"/><path d="M7.9 16.1L19.5 7.6"/>'),

    // freundlicher Hundekopf (skalierbar für Größen)
    dog: svg(
      '<path d="M6.6 6.3C5.1 5.6 3.7 6.5 3.7 8.3c0 1.7.6 3.4 1.9 4.4"/>' +
      '<path d="M17.4 6.3c1.5-.7 2.9.2 2.9 2 0 1.7-.6 3.4-1.9 4.4"/>' +
      '<path d="M5.5 10.6c0-3.3 2.9-5.6 6.5-5.6s6.5 2.3 6.5 5.6c0 2.4-1.1 4.1-2.4 5.1-1.1.85-1.4 1.85-4.1 1.85s-3-1-4.1-1.85c-1.3-1-2.4-2.7-2.4-5.1z"/>' +
      '<circle cx="9.6" cy="10.6" r="1" fill="currentColor" stroke="none"/>' +
      '<circle cx="14.4" cy="10.6" r="1" fill="currentColor" stroke="none"/>' +
      '<path d="M12 13.6v1.3"/>' +
      '<circle cx="12" cy="13" r=".95" fill="currentColor" stroke="none"/>'),

    // Pfote mit Krallen
    claw: svg(
      '<path d="M6.2 15.8c0-3 2.6-5 5.8-5s5.8 2 5.8 5c0 2-1.9 3-2.9 3.3-.8.2-1 .8-1 1.4 0 .8-.85 1.3-1.9 1.3s-1.9-.5-1.9-1.3c0-.6-.2-1.2-1-1.4-1-.3-2.9-1.3-2.9-3.3z"/>' +
      '<path d="M8.2 9.4 7.4 7.6M12 8.6V6.7M15.8 9.4l.8-1.8"/>'),

    // Sprühflasche / Pflege
    bottle: svg(
      '<path d="M9.4 8.2h5.2v10.6a2 2 0 0 1-2 2h-1.2a2 2 0 0 1-2-2z"/>' +
      '<path d="M10.4 8.2V5.6h3.2v2.6"/><path d="M11 3.6h2"/><path d="M14.6 10.2h2.6"/>'),

    comb: svg(
      '<path d="M4 8.3h16v2.4a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 10.7z"/>' +
      '<path d="M7 13v4.2M10 13v4.2M13 13v4.2M16 13v4.2"/>'),

    // Wollknäuel / Entfilzen
    yarn: svg(
      '<circle cx="12" cy="12" r="7.6"/>' +
      '<path d="M6.6 9.2c2.2 1 2.4 4 4.4 5.2M9.6 5.2c1.2 2.2 4.4 2.2 6.2 4.4M7.8 16.6c2 .2 3 2 5 2.2M14.4 5.6c.8 2.6 3.4 3.4 4.6 5.8"/>'),

    ear: svg(
      '<path d="M8.4 19.3c-1.6-1-2.2-3-2.2-6 0-4 2.6-7 6-7s6 2.6 6 6.2c0 3-2 4-3.4 4.5-1 .35-1.4 1-1.4 2 0 1-.85 1.8-1.85 1.8s-1.75-.8-1.75-1.8"/>' +
      '<path d="M10.3 9.4c.5-1 2.4-1.3 3.2 0 .6 1 .2 2.2-.8 2.7"/>'),

    eye: svg('<path d="M2.8 12s3.6-6 9.2-6 9.2 6 9.2 6-3.6 6-9.2 6-9.2-6-9.2-6z"/><circle cx="12" cy="12" r="2.6"/>'),

    bow: svg(
      '<path d="M12 12c-2-2.1-6-3.1-7.6-1.5S3.4 15.2 5.5 15.7 10 14.1 12 12z"/>' +
      '<path d="M12 12c2-2.1 6-3.1 7.6-1.5S20.6 15.2 18.5 15.7 14 14.1 12 12z"/>' +
      '<circle cx="12" cy="12" r="1.4"/>'),

    no: svg('<circle cx="12" cy="12" r="8.3"/><path d="M6.1 6.1l11.8 11.8"/>'),

    // Vertrauen / Ehrlichkeit – Schild mit Häkchen
    trust: svg('<path d="M12 3.4l6.6 2.3v4.8c0 4.4-2.9 7.5-6.6 8.9-3.7-1.4-6.6-4.5-6.6-8.9V5.7z"/><path d="M9.2 11.7l1.9 1.9L15.2 9.5"/>'),

    clock: svg('<circle cx="12" cy="12" r="8.2"/><path d="M12 7.4V12l3.1 2.1"/>'),

    pin: svg('<path d="M12 21s6.2-5.4 6.2-10.2A6.2 6.2 0 1 0 5.8 10.8C5.8 15.6 12 21 12 21z"/><circle cx="12" cy="10.8" r="2.3"/>'),

    home: svg('<path d="M3.8 11.2 12 4.8l8.2 6.4"/><path d="M6 9.7V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.7"/><path d="M9.8 20v-5.2h4.4V20"/>'),

    phone: svg('<path d="M6.4 3.8h3.1l1.5 4-2 1.5a11.2 11.2 0 0 0 5 5l1.5-2 4 1.5v3.1a2 2 0 0 1-2.1 2A15.2 15.2 0 0 1 4.4 5.9a2 2 0 0 1 2-2.1z"/>'),

    mobile: svg('<rect x="7" y="2.8" width="10" height="18.4" rx="2.3"/><path d="M10.8 18.4h2.4"/>'),

    // Sprechblase mit Punkten (Chat / WhatsApp)
    chat: svg('<path d="M3.9 11.4C3.9 7.3 7.5 4.4 12 4.4s8.1 2.9 8.1 7-3.6 7-8.1 7c-1 0-2-.15-2.9-.45L5 19.6l1.05-3.1A6.5 6.5 0 0 1 3.9 11.4z"/><path d="M9 11h.01M12 11h.01M15 11h.01"/>'),

    check: svg('<path d="M4.8 12.6l4.6 4.6L19.2 7.4"/>'),

    party: svg('<path d="M3.8 20.2 9 6.8l8.2 8.2z"/><path d="M9 6.8 8 11M12.8 9.2l3 3"/><path d="M15.2 3.8c1 .5 1.5 1.6 1 2.6M18 6c1.2 0 2.1.9 2.1 2.1M16.2 10.2c1 .3 1.6 1.3 1.4 2.4"/>'),

    calendar: svg('<rect x="4" y="5.4" width="16" height="15" rx="2.3"/><path d="M4 9.6h16M8 3.4v4M16 3.4v4"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 16.6h.01M12 16.6h.01"/>'),

    info: svg('<circle cx="12" cy="12" r="8.3"/><path d="M12 11v5"/><path d="M12 7.9h.01"/>'),

    menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),

    x: svg('<path d="M6.4 6.4l11.2 11.2M17.6 6.4 6.4 17.6"/>')
  };

  function render() {
    document.querySelectorAll('i.isvg[data-icon]').forEach(function (el) {
      if (el.dataset.done) return;
      var name = el.getAttribute('data-icon');
      if (ICONS[name]) { el.innerHTML = ICONS[name]; el.dataset.done = '1'; }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
  window.renderIcons = render;
})();
