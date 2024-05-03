document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.querySelector(".auto-type");
  const darkContainer = document.querySelector(".container");

  const words = [
    "Frontend Developer...",
    "Backend Developer...",
    "Fullstack Developer...",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      wordIndex = isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    }

    setTimeout(typeEffect, 100);
  };

  typeEffect();

  const toggleModeBtn = document.querySelector(".toggle-icon");
  toggleModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    darkContainer.classList.toggle("active");

    const icon = toggleModeBtn.querySelector("i");
    icon.classList.toggle("bx-sun");
    icon.classList.toggle("bx-moon");
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
