/* Typing animation */
const nameText = "Arif Shaik";
let i = 0;
const speed = 120;
const typed = document.getElementById("typed-name");

function typeEffect() {
  if (i < nameText.length) {
    typed.textContent += nameText.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

/* Slide navigation */
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

document.getElementById("nextSlide").onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

document.getElementById("prevSlide").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

/* Theme toggle */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
};

/* Project carousel */
const projects = document.querySelectorAll(".project");
let pIndex = 0;

function showProject(i) {
  projects.forEach(p => p.classList.remove("active"));
  projects[i].classList.add("active");
}

document.querySelector(".next").onclick = () => {
  pIndex = (pIndex + 1) % projects.length;
  showProject(pIndex);
};

document.querySelector(".prev").onclick = () => {
  pIndex = (pIndex - 1 + projects.length) % projects.length;
  showProject(pIndex);
};
