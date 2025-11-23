// SMOOTH SCROLL DENGAN OFFSET NAVBAR
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');
const offset = navbar.offsetHeight;

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    const elementPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  });
});

// Navbar shadow saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 3px 12px rgba(0,0,0,0.4)";
  } else {
    nav.style.boxShadow = "none";
  }
});
