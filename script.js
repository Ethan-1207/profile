/* ============================================================
   Yixuan He · Academic Portfolio — Interactions
   ============================================================ */

(function () {
  "use strict";

  // ---------- Year in footer ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Smooth scroll with nav offset ----------
  const nav = document.getElementById("nav");
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "#top") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navH = nav ? nav.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
