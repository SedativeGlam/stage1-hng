const form = document.querySelector("form");
const nameInput = document.querySelector('[data-testid="test-contact-name"]');
const emailInput = document.querySelector('[data-testid="test-contact-email"]');
const subjectInput = document.querySelector(
  '[data-testid="test-contact-subject"]'
);
const messageInput = document.querySelector(
  '[data-testid="test-contact-message"]'
);
const successMsg = document.querySelector(
  '[data-testid="test-contact-success"]'
);

const showError = (testId, message) => {
  const errorEl = document.querySelector(`[data-testid="${testId}"]`);
  errorEl.textContent = message;
  errorEl.style.display = "block";
};

const removeEror = (testId) => {
  const errorEl = document.querySelector(`[data-testid="${testId}"]`);
  errorEl.style.display = "none";
};

const clearErrors = () => {
  document
    .querySelectorAll('[data-testid^="test-contact-error-"]')
    .forEach((el) => {
      el.textContent = "";
      el.style.display = "none";
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  //Name validation
  if (nameInput.value === "") {
    showError("test-contact-error-name", "Enter your full name*");
    isValid = false;
  }

  //Email validation
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  if (!emailPattern.test(emailInput.value)) {
    showError("test-contact-error-email", "Invalid email address*");
    isValid = false;
  }

  //Subject validation
  if (subjectInput.value === "") {
    showError("test-contact-error-subject", "Enter a subject*");
    isValid = false;
  }

  //Message validation
  if (messageInput.value.length < 10) {
    showError("test-contact-error-message", "Enter atleast 10 characters*");
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "Submission successful!";
    successMsg.style.display = "block";

    form.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  }
});

const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
