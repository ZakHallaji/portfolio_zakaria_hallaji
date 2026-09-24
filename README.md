# Zakaria Hallaji — Personal Developer Portfolio

> **Mobile Developer — Kotlin & Flutter | Android Developer | Web & SaaS Developer**  
> Based in Marrakech, Morocco · [zakariaehallaji@gmail.com](mailto:zakariaehallaji@gmail.com) · [GitHub Profile](https://github.com/ZakHallaji)

---

## 🌟 Overview & Identity

This is the official portfolio of **Zakaria Hallaji**, crafted with an editorial, dark-first design aesthetic inspired by high-end creative developer websites (such as [djilan.fr](https://djilan.fr/)).

The portfolio is designed specifically for real job applications and recruiters:
- **Instant Clarity**: Communicates profile, core specialization (Kotlin, Android, Flutter), and availability status within seconds.
- **Deep Technical Case Studies**: Features detailed breakdowns of real projects including **MobiBiz Maroc**, **Social Media Manager SaaS**, **PDF Update Platform**, and the **OFPPT Student Portal**.
- **Human & Authentic**: Zero fake statistics, zero artificial percentage skill bars, and zero generic template cliches.

---

## 🛠️ Technology Stack

Built strictly following the client brief with **HTML5, CSS3, and Vanilla JavaScript**:
- **Semantic HTML5**: Clean document outline with ARIA roles and JSON-LD schema markup.
- **Pure CSS3**: Custom CSS variables, fluid typography (`clamp()`), dark monochrome palette with electric cyan accents (`#00d2ff`), and full `@media (prefers-reduced-motion)` accessibility.
- **Modular Vanilla JavaScript**:
  - `js/projects.js`: Project data structures and technical architecture models.
  - `js/animations.js`: Dynamic headline rotator, IntersectionObserver scroll reveals, desktop custom cursor, and interactive stack inspector.
  - `js/main.js`: Sticky navigation shrink, mobile drawer, active section spy, modal management (Esc key, focus trapping), and recruiter CV download.

---

## 📁 File Structure

```
/
├── index.html                  # Main entry point with complete semantic structure
├── css/
│   └── style.css               # Core design system & responsive layout rules
├── js/
│   ├── projects.js             # Project case studies & architecture metadata
│   ├── animations.js           # Scroll reveals, cursor & micro-interactions
│   └── main.js                 # Navigation, modal system & contact handling
├── assets/
│   ├── images/                 # High-resolution project mockups & assets
│   ├── projects/               # Project presentation assets
│   └── icons/                  # Vector icons & UI elements
└── README.md                   # Documentation & overview
```

---

## 📱 Featured Projects

### 01. MobiBiz Maroc (Hero Project)
- **Category**: Mobile Application / Commercial Management
- **Stack**: Kotlin · Android SDK · XML · Retrofit 2 · FastAPI · SQLAlchemy · MySQL · Firebase
- **Architecture**: `Android Native (MVVM + Retrofit) ──▶ REST API (FastAPI Python) ──▶ SQLAlchemy ORM ──▶ MySQL Database`
- **Features**: Product catalog & inventory, POS transaction logging, customer management, expense tracking, digital invoicing.

### 02. Social Media Manager SaaS
- **Category**: SaaS Platform / Content Operations
- **Stack**: JavaScript (ES6+) · HTML5 / CSS3 · REST APIs · Relational Database
- **Features**: Drag-and-drop editorial calendar, contextual post previews, engagement performance curves.

### 03. PDF Update Platform
- **Category**: SaaS / Web Document Processing
- **Stack**: JavaScript (ES6+) · Python · REST API · HTML5 Canvas
- **Features**: Visual page reorganization, merging, splitting, and secure auto-purging.

### 04. OFPPT Mobile Student Portal
- **Category**: Mobile Application / Academic Project
- **Stack**: Kotlin · XML Layouts · Android Studio · SQLite / Room · HTTP Client
- **Features**: Offline schedule caching, grade progression tracking, campus notices.

---

## 🚀 Running the Project

The website runs directly by opening `index.html` in any modern web browser without requiring a build step or server:

```bash
# Standalone browser execution:
open index.html

# Or via any local HTTP server:
npx serve .
# or
python3 -m http.server 3000
```

---

## 📄 License & Attribution

Designed and engineered for **Zakaria Hallaji** © 2026. All rights reserved.
