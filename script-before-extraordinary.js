const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const themeButton = document.getElementById("themeButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Mobile menu
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");

  const menuIsOpen = navigation.classList.contains("show");

  menuButton.textContent = menuIsOpen ? "✕" : "☰";
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close menu" : "Open menu"
  );
});

// Close mobile menu after clicking a navigation link
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("show");
    menuButton.textContent = "☰";
  });
});

// Dark mode
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "☀️ Light Mode";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkModeEnabled =
    document.body.classList.contains("dark-mode");

  themeButton.textContent = darkModeEnabled
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";

  localStorage.setItem(
    "theme",
    darkModeEnabled ? "dark" : "light"
  );
});

// Contact form
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent =
    `Thank you, ${name}! Your message has been received.`;

  contactForm.reset();
});const learnMoreButton = document.getElementById("learnMore");

learnMoreButton.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

