/* ====== Reset / base ====== */
:root{
  --bg: #0b0b0f;
  --surface: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.12);
  --text: #f5f5f7;
  --muted: rgba(245,245,247,0.72);
  --accent: #8b5cf6;
  --accent-2: #22c55e;
  --shadow: 0 14px 40px rgba(0,0,0,0.35);
  --radius: 18px;
  --max: 1100px;
}

/* ====== LIGHT MODE ====== */
body.light{
  --bg: #f5f5f7;
  --surface: rgba(0,0,0,0.05);
  --border: rgba(0,0,0,0.12);
  --text: #111111;
  --muted: rgba(17,17,17,0.75);
  --accent: #6d28d9;
  --accent-2: #16a34a;
  --shadow: 0 14px 40px rgba(0,0,0,0.15);
}

*{ margin: 0; padding: 0; box-sizing: border-box; }
html{ scroll-behavior: smooth; }

body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 600px at 20% 10%, rgba(139,92,246,0.18), transparent 60%),
              radial-gradient(900px 500px at 80% 20%, rgba(34,197,94,0.10), transparent 55%),
              var(--bg);
  color: var(--text);
  line-height: 1.6;
}

header, main, footer{ width: 100%; }
main{ padding: 0 18px; }

section{
  max-width: var(--max);
  margin: 0 auto;
  padding: 84px 0;
}

/* ====== Tipografia ====== */
h1{
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

h2{
  font-size: clamp(1.4rem, 2.2vw, 1.85rem);
  letter-spacing: -0.01em;
  margin-bottom: 14px;
}

h3{ font-size: 1.05rem; margin-bottom: 8px; }

p{ color: var(--muted); font-size: 1rem; }

a{ color: inherit; text-decoration: none; }

/* ====== Header ====== */
header{
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(11,11,15,0.55);
  border-bottom: 1px solid var(--border);
}

.header-inner{
  max-width: var(--max);
  margin: 0 auto;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.brand{
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}

.brand-dot{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 18px rgba(139,92,246,0.55);
}

.header-actions{
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav{
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

.nav a{
  font-size: 0.95rem;
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.nav a:hover{
  background: rgba(255,255,255,0.06);
  color: var(--text);
}

.nav a.active{
  color: var(--text);
  background: rgba(139,92,246,0.18);
  border: 1px solid rgba(139,92,246,0.35);
}

/* ====== HERO ====== */
#inicio{ padding-top: 56px; }

.hero{
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  align-items: center;
}

.badge{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
  color: var(--muted);
  width: fit-content;
  margin-bottom: 14px;
}

.badge span{ color: var(--text); font-weight: 600; }
.hero p{ margin-top: 12px; max-width: 60ch; }

.botoes{
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ====== Botões ====== */
.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.06);
  transition: 0.2s ease;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  cursor: pointer;
}

.btn:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,0.08);
}

.btn.primary{
  border-color: rgba(139,92,246,0.55);
  background: linear-gradient(180deg, rgba(139,92,246,0.35), rgba(139,92,246,0.18));
  box-shadow: 0 10px 30px rgba(139,92,246,0.18);
}

.btn.primary:hover{
  box-shadow: 0 16px 40px rgba(139,92,246,0.22);
}

/* Card lateral do hero */
.hero-card{
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.05);
  box-shadow: var(--shadow);
  padding: 18px;
}

.hero-card p{ margin-top: 8px; }

.hero-meta{
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.meta-line{
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--muted);
  font-size: 0.95rem;
}

.meta-pill{
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
  width: fit-content;
  color: var(--text);
  font-size: 0.9rem;
}

/* ====== Cards / grids ====== */
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 18px;
}

.card{
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.05);
  padding: 16px;
  transition: 0.2s ease;
}

.card:hover{
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.card p{ margin-top: 8px; }

.tags{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.tag{
  font-size: 0.85rem;
  color: var(--text);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
}

.card-links{
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.card-links a{
  font-size: 0.95rem;
  color: var(--text);
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.06);
  transition: 0.2s ease;
}

.card-links a:hover{
  background: rgba(255,255,255,0.08);
}

/* Projetos clicáveis */
.project-card{
  cursor: pointer;
}
.project-card:hover{
  border-color: rgba(139,92,246,0.35);
}

/* ====== Listas ====== */
ul{
  margin-top: 12px;
  padding-left: 18px;
  color: var(--muted);
}
li{ margin: 6px 0; }

/* ====== Contato ====== */
.contact-box{
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.contact-item{
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.05);
  padding: 16px;
}

.contact-item a{
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.contact-form-card{
  margin-top: 24px;
}

/* ====== Footer ====== */
footer{
  border-top: 1px solid var(--border);
  background: rgba(11,11,15,0.6);
}

.footer-inner{
  max-width: var(--max);
  margin: 0 auto;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 0.95rem;
}

/* ====== Responsivo ====== */
@media (max-width: 900px){
  .hero{ grid-template-columns: 1fr; }
  .grid{ grid-template-columns: 1fr; }
  .contact-box{ grid-template-columns: 1fr; }
  section{ padding: 64px 0; }
  .header-actions{ flex-wrap: wrap; justify-content: flex-end; }
}

/* ====== Animação ====== */
.hidden{
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.show{
  opacity: 1;
  transform: translateY(0);
}

/* ====== MODAL ====== */
.modal{
  position: fixed;
  inset: 0;
  display: none;
  z-index: 999;
}

.modal.show{ display: block; }

.modal-overlay{
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
}

.modal-content{
  position: relative;
  max-width: 720px;
  margin: 90px auto;
  padding: 18px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.06);
  box-shadow: var(--shadow);
}

.modal-content p{ margin-top: 10px; }

.modal-close{
  position: absolute;
  top: 12px;
  right: 12px;
}

/* ====== FORM ====== */
.form{
  margin-top: 14px;
  width: 100%;
  display: grid;
  gap: 14px;
}

.form-row{ display: grid; gap: 8px; }

label{
  font-size: 0.95rem;
  color: var(--text);
  font-weight: 600;
}

.form input,
.form textarea{
  width: 100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
  color: var(--text);
  outline: none;
  font-size: 1rem;
}

.form input::placeholder,
.form textarea::placeholder{
  color: rgba(245,245,247,0.55);
}

body.light .form input::placeholder,
body.light .form textarea::placeholder{
  color: rgba(17,17,17,0.55);
}

.form input:focus,
.form textarea:focus{
  border-color: rgba(139,92,246,0.55);
  box-shadow: 0 0 0 4px rgba(139,92,246,0.12);
}

.error{
  min-height: 18px;
  font-size: 0.88rem;
  color: #ef4444;
}

.invalid{
  border-color: rgba(239,68,68,0.7) !important;
  box-shadow: 0 0 0 4px rgba(239,68,68,0.12) !important;
}

.form-actions{
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.form-status{
  color: var(--muted);
  font-size: 0.95rem;
}

/* Form em 2 colunas no desktop */
@media (min-width: 900px){
  .form{ grid-template-columns: 1fr 1fr; gap: 14px; }
  .form .form-row:nth-child(3){ grid-column: 1 / -1; }
  .form .form-actions{ grid-column: 1 / -1; }
}

/* ====== Botão Enviar (mais claro e chamativo) ====== */
.form-actions .btn.primary{
  background: linear-gradient(180deg, rgba(139,92,246,0.9), rgba(139,92,246,0.7));
  color: #ffffff;
  border: none;
  box-shadow: 0 14px 34px rgba(139, 92, 246, 0.45);
}

.form-actions .btn.primary:hover{
  transform: translateY(-1px);
  box-shadow: 0 18px 44px rgba(139, 92, 246, 0.6);
}