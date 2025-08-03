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
  let count = 0;
  const elem = document.getElementById(id);
  const interval = setInterval(() => {
    if (count >= end) {
        clearInterval(interval);
    }
    else {
      count++;
      elem.textContent = count;
    }
  }, 50);
}
animateCount('coding-hours', 20);

const toggleButton = document.getElementById("theme-toggle1");
const themeIcon = document.getElementById("theme-icon1");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "assets/moon.svg";
    } else {
        themeIcon.src = "assets/sun.svg";
    }
});

// const toggleButton2 = document.getElementById("theme-toggle2");
// const themeIcon2 = document.getElementById("theme-icon2");

// toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         themeIcon.src = "assets/moon.svg";
//     } else {
//         themeIcon.src = "assets/sun.svg";
//     }
// });

// const toggleButton3 = document.getElementById("theme-toggle3");
// const themeIcon3 = document.getElementById("theme-icon3");

// toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         themeIcon.src = "assets/moon.svg";
//     } else {
//         themeIcon.src = "assets/sun.svg";
//     }
// });