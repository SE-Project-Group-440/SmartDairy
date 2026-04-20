// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll animation
const elements = document.querySelectorAll('.card, .box, .doc');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if(position < screen - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});