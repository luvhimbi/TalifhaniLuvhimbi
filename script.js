// Mobile menu toggle
const btn = document.getElementById("menuBtn");
const nav = document.getElementById("mobileNav");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");

btn.addEventListener("click", () => {
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
