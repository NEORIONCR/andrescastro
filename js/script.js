/* ==========================================================================
   ANDRÉS CASTRO — site behavior
   Vanilla JS. No dependencies. Sections:
   1. Mobile menu toggle
   2. Marquee infinite loop (PROOF carousel) — duplicates track for seamless scroll
   3. Band name vertical infinite scroll (ON STAGE WITH)
   4. Cross-fade cyclers (Pilar tour photo, On-stage photo)
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Mobile menu ---------- */
  var burger = document.getElementById("navBurger");
  var closeBtn = document.getElementById("mobileMenuClose");
  var menu = document.getElementById("mobileMenu");

  function openMenu() {
    menu.classList.add("is-open");
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  menu?.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- 2. Marquee: duplicate children once so the 50% keyframe loops seamlessly ---------- */
  function makeSeamless(trackId) {
    var track = document.getElementById(trackId);
    if (!track) return;
    var clone = track.innerHTML;
    track.insertAdjacentHTML("beforeend", clone);
  }

  makeSeamless("proofTrack");
  makeSeamless("bandTrack");

  /* ---------- 3. Cross-fade cyclers ---------- */
  function startCycler(containerId, intervalMs) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var slides = container.querySelectorAll("img");
    if (slides.length < 2) return;
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, intervalMs);
  }

  startCycler("pilarTourMedia", 2200);
  startCycler("onStagePhoto", 2000);

  /* ---------- Accessibility: close mobile menu on Escape ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();
