const timeEl = document.querySelector('[data-testid="test-user-time"]');

const updateTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const milliseconds = Date.now();
  timeEl.textContent = `${timeString} - ${milliseconds}`;
};

updateTime();

const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
