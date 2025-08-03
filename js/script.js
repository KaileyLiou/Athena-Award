var Typed = new Typed(".typed-text", {
    strings: ["a high schooler.", "a coder.", "an athlete.", "a graphic designer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

function toggleCaption() {
  const caption = document.getElementById("meals-caption");
  if (caption.style.display === "none") {
    caption.style.display = "block";
  } else {
    caption.style.display = "none";
  }
}

function animateCount(id, end) {
  let num = 0;
  const elem = document.getElementById(id);
  const timer = setInterval(() => {
    if (num >= end) {
      clearInterval(timer);
    } else {
      num++;
      elem.textContent = num;
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  // typing effect
  var typed = new Typed(".typed-text", {
    strings: ["a high schooler.", "a coder.", "an athlete.", "a graphic designer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

  // coding time animation
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        animateCount("coding-hours", 20);
        observer.unobserve(item.target);
      }
    });
  });
  const target_hour = document.getElementById("coding-time");
  if (target_hour) {
    observer.observe(target_hour);
  }

  // Theme toggle button logic
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (toggleButton && themeIcon) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "assets/moon.svg";
      } else {
        themeIcon.src = "assets/sun.svg";
      }
    });
  }
});
