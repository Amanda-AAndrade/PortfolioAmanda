/* =========================
   MENU ATIVO AO ROLAR
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");
const header = document.querySelector("header");

function activateMenu() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - header.offsetHeight - 20;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateMenu);
activateMenu(); // ativa ao carregar a página

/* =========================
   SCROLL SUAVE COM OFFSET
========================= */
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId.startsWith("#")) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - header.offsetHeight - 16;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

/* =========================
   ANIMAÇÃO AO APARECER
========================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* =========================
   DARK / LIGHT MODE
========================= */
const themeToggle = document.getElementById("themeToggle");

// Carrega preferência salva
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* =========================
   FIM DO CÓDIGO
========================= */
// Código finalizado
