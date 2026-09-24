/**
 * Zakaria Hallaji — Core Portfolio Application Logic
 * Navigation, Modal Management, Project Case Studies, Contact Form & CV Actions
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjectModals();
  initCvModal();
  initContactForm();
  initPhotoManager();
});

/**
 * 1. Navigation System (Sticky shrink, Mobile Drawer, Active Spy)
 */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky shrink on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      } else {
        mobileMenu.classList.add("open");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Active section spy
  const sections = document.querySelectorAll("section[id]");
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach((sec) => spyObserver.observe(sec));
}

/**
 * 2. Project Case Study Modal
 */
function initProjectModals() {
  const modalBackdrop = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!modalBackdrop || !closeBtn) return;

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });

  // Attach click listeners to all project triggers
  document.querySelectorAll("[data-project-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute("data-project-trigger");
      openProjectCaseStudy(projectId);
    });
  });
}

function openProjectCaseStudy(projectId) {
  const modalBackdrop = document.getElementById("project-modal");
  if (!window.PROJECTS || !modalBackdrop) return;

  const project = window.PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  // Populate Modal Fields
  const categoryEl = document.getElementById("modal-project-category");
  const yearEl = document.getElementById("modal-project-year");
  const titleEl = document.getElementById("modal-project-title");
  const taglineEl = document.getElementById("modal-project-tagline");
  const imageEl = document.getElementById("modal-project-image");
  const problemEl = document.getElementById("modal-project-problem");
  const solutionEl = document.getElementById("modal-project-solution");
  const archEl = document.getElementById("modal-project-architecture");
  const featuresContainer = document.getElementById("modal-project-features");
  const techMetaContainer = document.getElementById("modal-project-tech");
  const githubLink = document.getElementById("modal-github-link");

  if (categoryEl) categoryEl.textContent = project.category;
  if (yearEl) yearEl.textContent = project.year;
  if (titleEl) titleEl.textContent = project.title;
  if (taglineEl) taglineEl.textContent = project.tagline;
  if (imageEl) {
    imageEl.src = project.image;
    imageEl.alt = `${project.title} Interface & Architecture`;
  }
  if (problemEl) problemEl.textContent = project.problem;
  if (solutionEl) solutionEl.textContent = project.solution;
  if (archEl) archEl.textContent = project.architecture;

  if (featuresContainer && project.features) {
    featuresContainer.innerHTML = project.features
      .map(
        (feat) => `
      <div class="feature-mini-card">
        <h4 class="feature-mini-title">${escapeHtml(feat.title)}</h4>
        <p class="feature-mini-desc">${escapeHtml(feat.desc)}</p>
      </div>
    `
      )
      .join("");
  }

  if (techMetaContainer && project.technologies) {
    techMetaContainer.innerHTML = project.technologies
      .map(
        (tech, idx) => `
        <span class="tech-highlight">${escapeHtml(tech)}</span>${
          idx < project.technologies.length - 1
            ? ' <span class="meta-separator">·</span> '
            : ""
        }
      `
      )
      .join("");
  }

  if (githubLink) {
    githubLink.href = project.github;
  }

  // Open
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * 3. Curriculum Vitae (CV) Modal & Direct Download
 */
function initCvModal() {
  const cvModal = document.getElementById("cv-modal");
  const openCvButtons = document.querySelectorAll(".btn-open-cv");
  const closeCvBtn = document.getElementById("cv-modal-close-btn");
  const downloadCvBtn = document.getElementById("download-cv-action");

  if (!cvModal) return;

  function closeCv() {
    cvModal.classList.remove("open");
    cvModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openCvButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      cvModal.classList.add("open");
      cvModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeCvBtn) closeCvBtn.addEventListener("click", closeCv);

  cvModal.addEventListener("click", (e) => {
    if (e.target === cvModal) closeCv();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModal.classList.contains("open")) {
      closeCv();
    }
  });

  // CV Download action creates a formatted markdown / printable file for recruiters
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", () => {
      const cvText = `========================================================================
ZAKARIA HALLAJI — CURRICULUM VITAE
Mobile Developer | Kotlin · Android · Flutter
Location: Marrakech, Morocco
Email: zakariaehallaji@gmail.com
GitHub: https://github.com/ZakHallaji
========================================================================

PROFILE SUMMARY
Product-oriented Mobile Developer specializing in Kotlin, Android SDK, and Flutter.
Solid practical experience developing Android applications, SaaS backends with
FastAPI/Python, and integrating resilient REST APIs and relational databases.

CORE TECHNICAL SKILLS
- Mobile: Kotlin, Android SDK, XML Layouts, Material Design 3, Coroutines, Flutter, Dart, Firebase
- Backend & Data: Python, FastAPI, SQLAlchemy, REST APIs, MySQL, SQLite / Room
- Web: JavaScript (ES6+), HTML5, CSS3, Responsive Design
- Engineering & Tools: Git, GitHub, Android Studio, Postman, Figma, Linux

FEATURED PROJECTS
1. MobiBiz Maroc (Mobile Business Management)
   - Native Kotlin Android application for commercial management in Moroccan SMEs.
   - Modules: Products & inventory, sales records, customer tracking, expense logging, invoice generation.
   - Stack: Kotlin, Android SDK, Retrofit 2, FastAPI (Python), SQLAlchemy, MySQL, Firebase.
   - Architecture: MVVM pattern with asynchronous Coroutines network pipeline.

2. Social Media Manager SaaS
   - Centralized web platform for scheduling, previewing, and organizing multi-platform social media publications.
   - Stack: JavaScript (ES6+), HTML5/CSS3, RESTful API, Database storage.

3. PDF Update Platform
   - Fast web application to manipulate, reorganize, merge, and update PDF files securely.
   - Stack: JavaScript, Python, REST API, HTML5 Canvas.

4. OFPPT Mobile Student Application
   - Academic Android application developed with Kotlin and XML for student schedule and grades access.
   - Stack: Kotlin, XML, Android Studio, SQLite, HTTP client.

PROFESSIONAL EXPERIENCE & CONTEXT
- Technical Developer & IT Support context | ANAPEC / Twily
  * User assistance, technical troubleshooting, payment platform testing and workflow optimization.
  * Digital tools integration and operational support.

EDUCATION & QUALIFICATIONS
- Technicien Spécialisé — Développement Digital (Option Web & Mobile)
  OFPPT Marrakech | Completed

LANGUAGES
- French: Fluent (Professional working proficiency)
- Arabic: Native
- English: Professional technical proficiency
========================================================================
`;
      const blob = new Blob([cvText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.download = "CV_Zakaria_Hallaji_Mobile_Developer.txt";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(url);
    });
  }
}

/**
 * 4. Contact Form with Frontend Validation & Mailto Direct Bridge
 */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const feedback = document.getElementById("form-feedback-message");
  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    // Validation
    if (!name || !email || !message) {
      showFeedback("Veuillez remplir tous les champs du formulaire.", true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback("Veuillez saisir une adresse email valide.", true);
      return;
    }

    // Construct Mailto URI
    const recipient = "zakariaehallaji@gmail.com";
    const subject = encodeURIComponent(`Opportunité Mobile / Contact: ${name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nEnvoyé depuis le portfolio de Zakaria Hallaji`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    showFeedback("Ouverture de votre messagerie pour envoyer le message...", false);

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });

  function showFeedback(text, isError) {
    feedback.textContent = text;
    feedback.className = `form-feedback ${isError ? "error" : ""}`;
    feedback.style.display = "block";
  }
}

/**
 * Helper to escape HTML and prevent XSS
 */
function escapeHtml(string) {
  const div = document.createElement("div");
  div.textContent = string;
  return div.innerHTML;
}

/**
 * 5. Photo Manager — Original User Photo Upload & Persistence
 * Ensures Zakaria's exact real photo is never altered by AI and persists across sessions
 */
function initPhotoManager() {
  const photoInput = document.getElementById("real-photo-input");
  const heroCard = document.getElementById("hero-portrait-card");
  const aboutCard = document.getElementById("about-portrait-card");
  const uploadBtns = document.querySelectorAll(
    "#btn-trigger-photo-upload, .btn-trigger-photo-about"
  );
  const targets = document.querySelectorAll(".user-portrait-target");

  // 1. Check if user already stored their exact photo in localStorage
  const storedPhoto = localStorage.getItem("zakaria_user_photo");
  if (storedPhoto) {
    applyPhoto(storedPhoto);
  }

  function applyPhoto(dataUrl) {
    targets.forEach((img) => {
      img.src = dataUrl;
      img.srcset = "";
    });
  }

  // 2. Trigger file picker
  uploadBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (photoInput) photoInput.click();
    });
  });

  if (heroCard) {
    heroCard.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest("button")) return;
      if (photoInput) photoInput.click();
    });

    // Drag and drop support
    heroCard.addEventListener("dragover", (e) => {
      e.preventDefault();
      heroCard.classList.add("drag-over");
    });

    heroCard.addEventListener("dragleave", () => {
      heroCard.classList.remove("drag-over");
    });

    heroCard.addEventListener("drop", (e) => {
      e.preventDefault();
      heroCard.classList.remove("drag-over");
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (aboutCard) {
    aboutCard.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest("button")) return;
      if (photoInput) photoInput.click();
    });
  }

  if (photoInput) {
    photoInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    });
  }

  function handleFile(file) {
    if (!file.type.startsWith("image/")) {
      showToast("Veuillez sélectionner un fichier image valide.", true);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      applyPhoto(dataUrl);

      // Save to localStorage for instant persistence across reloads
      try {
        localStorage.setItem("zakaria_user_photo", dataUrl);
      } catch (err) {
        console.warn("Storage quota exceeded", err);
      }

      // Save to server backend
      fetch("/api/upload-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUrl }),
      })
        .then((res) => res.json())
        .then(() => {
          showToast("Votre photo originale a été enregistrée avec succès !", false);
        })
        .catch(() => {
          showToast("Photo originale appliquée !", false);
        });
    };
    reader.readAsDataURL(file);
  }

  function showToast(message, isError) {
    let toast = document.getElementById("photo-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "photo-toast";
      toast.style.cssText =
        "position: fixed; bottom: 2rem; right: 2rem; background: #111215; color: #fff; padding: 0.875rem 1.5rem; border-radius: 6px; border: 1px solid var(--accent); box-shadow: 0 10px 30px rgba(0,0,0,0.5); z-index: 10000; font-family: var(--font-display); font-size: 0.875rem; transition: transform 0.3s ease, opacity 0.3s ease; opacity: 0; transform: translateY(10px); pointer-events: none;";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.borderColor = isError ? "#ef4444" : "var(--accent)";
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
    }, 4000);
  }
}
