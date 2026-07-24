const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const form = document.querySelector("[data-newsletter-form]");
const success = document.querySelector("[data-success]");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.classList.toggle("open", !open);
  navigation.classList.toggle("open", !open);
  document.body.style.overflow = open ? "" : "hidden";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.classList.remove("open");
    navigation.classList.remove("open");
    document.body.style.overflow = "";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

form.addEventListener("submit", event => {
  event.preventDefault();
  form.hidden = true;
  success.hidden = false;
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
