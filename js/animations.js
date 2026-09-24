/**
 * Zakaria Hallaji — Creative Animations & Interactions
 * Subtle, high-performance interactions, custom cursor, scroll reveals, and rotator.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTextRotator();
  initScrollReveals();
  initCustomCursor();
  initTechInspector();
  initMagneticElements();
});

/**
 * 1. Dynamic Hero Word Rotator
 */
function initTextRotator() {
  const words = document.querySelectorAll(".rotator-word");
  if (!words.length) return;

  let currentIndex = 0;
  const interval = 2400;

  setInterval(() => {
    const currentWord = words[currentIndex];
    currentWord.classList.remove("active");
    currentWord.classList.add("exit");

    setTimeout(() => {
      currentWord.classList.remove("exit");
    }, 450);

    currentIndex = (currentIndex + 1) % words.length;
    const nextWord = words[currentIndex];
    nextWord.classList.add("active");
  }, interval);
}

/**
 * 2. IntersectionObserver Scroll Reveals
 */
function initScrollReveals() {
  // If user prefers reduced motion, reveal everything immediately
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.12,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

/**
 * 3. Desktop Custom Cursor
 */
function initCustomCursor() {
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  // Disable on touch or small devices
  if (!dot || !outline || window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let outlineX = -100;
  let outlineY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Smooth lerp for outer cursor ring
  function renderCursor() {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;

    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states for links & buttons
  const interactives = document.querySelectorAll("a, button, .interactive-target");
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      outline.classList.add("hover-interactive");
    });
    el.addEventListener("mouseleave", () => {
      outline.classList.remove("hover-interactive");
    });
  });

  // Special "VIEW" state for project visual cards
  const projectCards = document.querySelectorAll(".project-visual-frame, .project-card-title");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      outline.classList.add("hover-project");
      outline.textContent = "VIEW";
    });
    card.addEventListener("mouseleave", () => {
      outline.classList.remove("hover-project");
      outline.textContent = "";
    });
  });

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    outline.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    outline.style.opacity = "1";
  });
}

/**
 * 4. Interactive Tech Stack Inspector
 */
const TECH_DETAILS = {
  "Kotlin": "Modern, expressive Android language. Experience with Coroutines, Flow, MVVM architecture, and clean code principles.",
  "Android SDK": "Native Android development, Jetpack components, ViewModel, LiveData, Room persistence, and Material 3 design.",
  "XML Layouts": "Pixel-perfect declarative UI design with ConstraintLayout, CoordinatorLayout, and responsive layouts across screen sizes.",
  "Flutter": "Cross-platform mobile development using Dart, responsive widget trees, and unified state management.",
  "Dart": "Object-oriented language powering Flutter apps, asynchronous programming with Futures and Streams.",
  "Firebase": "Cloud Firestore, Firebase Authentication, Cloud Messaging (FCM), and Crashlytics for mobile telemetry.",
  "HTML5 / CSS3": "Semantic markup, modern CSS grid, flexbox, CSS variables, and fluid typography without heavy bloat.",
  "JavaScript (ES6+)": "Modern client-side scripting, DOM manipulation, asynchronous fetch APIs, and modular architecture.",
  "PHP": "Server-side scripting, dynamic web rendering, session management, and database connectors.",
  "Python": "Backend microservices, data processing pipelines, automation scripts, and RESTful service integration.",
  "FastAPI": "High-performance asynchronous Python web framework providing OpenAPI documentation and swift API execution.",
  "REST APIs": "Designing and consuming HTTP endpoints with JSON serialization, status codes, and resilient error recovery.",
  "MySQL / SQL": "Relational schema design, normalization, indexing, complex JOIN queries, and data integrity guarantees.",
  "Android Studio": "Primary IDE for native Android: Layout Inspector, Profiler, Logcat debugging, and Gradle builds.",
  "Git & GitHub": "Version control, branching workflows, pull requests, semantic commit messages, and collaborative code reviews.",
  "Postman": "API testing, request collection structuring, authentication headers verification, and endpoint validation.",
  "Figma": "UI/UX design inspection, responsive layout exploration, asset extraction, and design system alignment."
};

function initTechInspector() {
  const inspectorTitle = document.getElementById("inspector-tech-name");
  const inspectorDesc = document.getElementById("inspector-tech-desc");
  const pills = document.querySelectorAll(".tech-pill");

  if (!inspectorTitle || !inspectorDesc) return;

  pills.forEach((pill) => {
    pill.addEventListener("mouseenter", () => {
      const name = pill.getAttribute("data-tech") || pill.textContent.trim();
      const desc = TECH_DETAILS[name] || `Production-grade utilization of ${name} in modern mobile and web development.`;

      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      inspectorTitle.textContent = name;
      inspectorDesc.textContent = desc;
    });

    pill.addEventListener("focus", () => {
      const name = pill.getAttribute("data-tech") || pill.textContent.trim();
      const desc = TECH_DETAILS[name] || `Production-grade utilization of ${name} in modern mobile and web development.`;
      inspectorTitle.textContent = name;
      inspectorDesc.textContent = desc;
    });
  });
}

/**
 * 5. Subtle Magnetic Elements (Desktop Only)
 */
function initMagneticElements() {
  if (window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const magneticBtns = document.querySelectorAll(".btn-talk, .btn-primary");
  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px)";
      setTimeout(() => {
        btn.style.transform = "";
      }, 200);
    });
  });
}
