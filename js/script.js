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

const toggleButton = document.querySelectorAll('.theme-toggle');

toggleButton.forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.theme-icon');
    const body = document.body;

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      icon.src = 'assets/moon.svg';
    } else {
      icon.src = 'assets/sun.svg';
    }
  });
});