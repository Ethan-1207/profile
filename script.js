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
  // ---------- Like button (per-visitor, saved in browser) ----------
  const LIKE_KEY = "yh-profile-liked";
  const BASE_LIKES = 0; // 起始点赞数，可自行修改
  const likeBtn = document.getElementById("likeBtn");
  const likeCountEl = document.getElementById("likeCount");
  let liked = false;
  try { liked = localStorage.getItem(LIKE_KEY) === "1"; } catch (e) {}

  function renderLike() {
    if (!likeBtn || !likeCountEl) return;
    likeBtn.classList.toggle("liked", liked);
    likeCountEl.textContent = BASE_LIKES + (liked ? 1 : 0);
  }

  if (likeBtn && likeCountEl) {
    renderLike();
    likeBtn.addEventListener("click", () => {
      liked = !liked;
      try { localStorage.setItem(LIKE_KEY, liked ? "1" : "0"); } catch (e) {}
      renderLike();
    });
  }
})();
