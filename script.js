// Typing effect
const typingText = document.querySelector('.typing-text');
const roles = ['Web Developer', 'Tech Mentor', 'Open Source Contributor'];
let i = 0, j = 0, isDeleting = false;

function type() {
  let current = roles[i];
  if (isDeleting) {
    typingText.textContent = current.substring(0, j--);
  } else {
    typingText.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Toggle dark mode
document.getElementById('toggle-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
