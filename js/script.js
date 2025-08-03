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

const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "assets/moon.svg";
    } else {
        themeIcon.src = "assets/sun.svg";
    }
});