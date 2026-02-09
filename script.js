// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing animation for hero section
const text = "Hi, I'm Saad 👋";
let index = 0;
function typeEffect() {
  const h1 = document.querySelector('.hero h1');
  if (index < text.length) {
    h1.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
document.querySelector('.hero h1').textContent = ""; // clear initial text
typeEffect();

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑ Top";
scrollBtn.classList.add('scroll-top');
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.border = "none";
scrollBtn.style.background = "linear-gradient(135deg, #6366f1, #38bdf8)";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

// Show button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
