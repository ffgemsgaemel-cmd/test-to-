/* ═══════════════════════════════════════════════════════════════
   DARK PANEL — branding (edit ONLY this file to personalise)
   Leave a value empty ("") to hide that button.
   ═══════════════════════════════════════════════════════════════ */
window.DARK_BRAND = {
  telegram: "",   // e.g. "https://t.me/your_username"   (support / contact)
  channel:  "",   // e.g. "https://t.me/your_channel"    (announcements)
  github:   ""    // e.g. "https://github.com/your_user/dark-panel"
};

(function () {
  function apply() {
    var B = window.DARK_BRAND || {}, any = false;
    document.querySelectorAll('[data-brand]').forEach(function (el) {
      var url = (B[el.getAttribute('data-brand')] || '').trim();
      if (url) { el.href = url; el.style.display = ''; any = true; }
      else { el.style.display = 'none'; }
    });
    var soc = document.getElementById('brandSocial');
    if (soc) soc.style.display = any ? '' : 'none';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
