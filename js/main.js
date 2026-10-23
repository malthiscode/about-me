// ===== Thème clair / sombre =====
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
} catch (e) {}

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isDark =
      root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
});

// ===== Menu mobile =====
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open"))
  );
}

// ===== Filtres de projets (sections détaillées) =====
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll("#projects .project");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    projects.forEach((p) => {
      p.hidden = !(f === "all" || p.dataset.cat === f);
    });
  });
});

// ===== Lightbox (agrandir les photos) =====
const lb = document.getElementById("lightbox");
if (lb && typeof lb.showModal === "function") {
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector("figcaption");
  const prev = lb.querySelector(".lb-prev");
  const next = lb.querySelector(".lb-next");
  let group = [];
  let index = 0;

  const show = (i) => {
    index = (i + group.length) % group.length;
    const btn = group[index];
    const img = btn.querySelector("img");
    lbImg.src = btn.dataset.full;
    lbImg.alt = img.alt;
    lbCap.textContent = btn.parentElement.querySelector("figcaption")?.textContent || "";
  };

  document.querySelectorAll(".zoom").forEach((btn) => {
    btn.addEventListener("click", () => {
      group = Array.from(btn.closest("[data-gallery]").querySelectorAll(".zoom"));
      const multi = group.length > 1;
      prev.hidden = next.hidden = !multi;
      show(group.indexOf(btn));
      lb.showModal();
    });
  });
  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
  lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => {
    if (group.length < 2) return;
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

// ===== Apparition au scroll =====
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("visible"));
}

// ===== Année du footer =====
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
