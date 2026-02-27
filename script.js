// Viti aktual në footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Numërimi mbrapsht simbolik (deri në një datë të caktuar)
(function () {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  // Vendos datën e eventit: mund ta ndryshosh
  const target = new Date();
  target.setMonth(target.getMonth() + 2); // +2 muaj nga tani

  function updateCountdown() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      countdownEl.textContent = "0d";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.textContent = days + "d";
  }

  updateCountdown();
  setInterval(updateCountdown, 1000 * 60 * 60); // rinovo çdo orë
})();

// Smooth scroll për butonat me data-scroll ose CTA
function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    if (target) smoothScrollTo(target);
  });
});

// Burger menu për mobile
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Mbyll menunë kur klikohet një link
  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveal me IntersectionObserver
const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((el) => observer.observe(el));
}
