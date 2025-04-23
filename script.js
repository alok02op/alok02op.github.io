// Toggle menu on icon click
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
  }
// -------------------------------------
// Close menu when clicking outside
document.addEventListener("click", function(event) {
const nav = document.getElementById("nav-links");
const toggle = document.querySelector(".menu-toggle");

if (!nav.contains(event.target) && !toggle.contains(event.target)) {
    nav.classList.remove("active");
}
});
// -------------------------------------
document.querySelectorAll("#nav-links a").forEach(link => {
link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("active");
});
});
// -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
    });
});
});
// -------------------------------------
//Extras
window.onscroll = function () {
    document.getElementById("topBtn").style.display =
      window.scrollY > 200 ? "block" : "none";
  };
  document.getElementById("topBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

