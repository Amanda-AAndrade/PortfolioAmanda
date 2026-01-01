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
activateMenu();

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
   MODAL DE PROJETOS
========================= */
const projects = {
  "qzverso": {
    title: "Qzverso – Plataforma de Publicação de Histórias",
    desc: "Inspirado no Wattpad, desenvolvido com HTML, CSS e JavaScript. Estrutura inicial preparada para futuras integrações com APIs e banco de dados.",
    tags: ["HTML", "CSS", "JavaScript", "Em evolução"],
    links: [
      { label: "GitHub", url: "https://github.com/Qzverso/Qzverso" }
    ]
  },
  "curriculo-html": {
    title: "Currículo em HTML/CSS",
    desc: "Currículo responsivo feito com HTML e CSS puro, focado em estrutura semântica e layout limpo.",
    tags: ["HTML", "CSS", "Responsivo"],
    links: [
      { label: "GitHub", url: "https://github.com/Amanda-AAndrade/MeuCurriculoHTML.git" }
    ]
  },
  "aprenda-facil": {
    title: "Projeto de Extensão – Aprenda Fácil",
    desc: "Projeto acadêmico desenvolvido com HTML e CSS, com foco em educação acessível e organização de conteúdo.",
    tags: ["HTML", "CSS", "PEX"],
    links: [
      { label: "Acessar site", url: "https://amanda-aandrade.github.io/aprenda-facil-pex/" },
      { label: "GitHub", url: "https://github.com/Amanda-AAndrade/aprenda-facil-pex" }
    ]
  },
  "portfolio": {
    title: "Portfólio – Amanda Andrade",
    desc: "Portfólio profissional feito com HTML, CSS e JavaScript, com melhorias contínuas e foco em boa apresentação.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Acessar", url: "https://amanda-aandrade.github.io/PortfolioAmanda/" }
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalLinks = document.getElementById("modalLinks");

function openModal(projectId) {
  const data = projects[projectId];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;

  modalTags.innerHTML = "";
  data.tags.forEach(t => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    modalTags.appendChild(span);
  });

  modalLinks.innerHTML = "";
  data.links.forEach(l => {
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    modalLinks.appendChild(a);
  });

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project");
    openModal(id);
  });
});

/* Evita abrir modal ao clicar nos links dentro do card */
document.querySelectorAll(".project-card .card-links a").forEach(a => {
  a.addEventListener("click", (e) => e.stopPropagation());
});

modal.addEventListener("click", (e) => {
  if (e.target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* =========================
   FORM CONTATO (VALIDAÇÃO)
========================= */
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");
const formStatus = document.getElementById("formStatus");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setError(input, errorEl, msg) {
  input.classList.add("invalid");
  errorEl.textContent = msg;
}

function clearError(input, errorEl) {
  input.classList.remove("invalid");
  errorEl.textContent = "";
}

function clearStatus() {
  formStatus.textContent = "";
}

[nameInput, emailInput, messageInput].forEach(i => {
  i.addEventListener("input", () => {
    clearStatus();
    if (i === nameInput) clearError(nameInput, errorName);
    if (i === emailInput) clearError(emailInput, errorEmail);
    if (i === messageInput) clearError(messageInput, errorMessage);
  });
});

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearStatus();

    let ok = true;

    if (nameInput.value.trim().length < 2) {
      setError(nameInput, errorName, "Digite seu nome (mín. 2 caracteres).");
      ok = false;
    } else {
      clearError(nameInput, errorName);
    }

    if (!isValidEmail(emailInput.value.trim())) {
      setError(emailInput, errorEmail, "Digite um email válido.");
      ok = false;
    } else {
      clearError(emailInput, errorEmail);
    }

    if (messageInput.value.trim().length < 10) {
      setError(messageInput, errorMessage, "Escreva uma mensagem (mín. 10 caracteres).");
      ok = false;
    } else {
      clearError(messageInput, errorMessage);
    }

    if (!ok) {
      formStatus.textContent = "Corrija os campos destacados e tente novamente.";
      return;
    }

    formStatus.textContent = "Mensagem pronta! (Envio simulado)";
    form.reset();
  });
}