document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       1. TOGGLE SHOW MORE
    ========================================= */
  function toggle(btn) {
    let t = btn.previousElementSibling;
    if (t.style.maxHeight === "0px") {
      t.style.maxHeight = "1500px";
      btn.innerHTML = "Show Less";
    } else {
      t.style.maxHeight = "0px";
      btn.innerHTML = "Show More";
    }
  }

  // Make toggle globally accessible for HTML onclick attributes
  window.toggle = toggle;

  document.querySelectorAll(".moreDetails").forEach((m) => {
    m.style.maxHeight = "0px";
    m.style.overflow = "hidden";
    m.style.transition = "max-height 0.4s ease-in-out";
  });

  /* =========================================
       2. SCROLL REVEAL & TIMELINE
    ========================================= */
  function reveal() {
    document.querySelectorAll(".reveal").forEach((r) => {
      if (r.getBoundingClientRect().top < window.innerHeight - 100)
        r.classList.add("active");
    });
    document.querySelectorAll(".timeline-item").forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight * 0.5)
        item.classList.add("active-line");
      else item.classList.remove("active-line");
    });
  }
  window.addEventListener("scroll", reveal);

  // Trigger once on load to catch elements already in view
  reveal();

  /* =========================================
       3. 3D TILT
    ========================================= */
  document
    .querySelectorAll(".profile-card, .project-card-mini")
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const centerX = r.width / 2;
        const centerY = r.height / 2;
        const rotateX = ((e.clientY - r.top - centerY) / centerY) * -10;
        const rotateY = ((e.clientX - r.left - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)`;
      });
    });
});
