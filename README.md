# 📿 Dua & Ruqyah – Hisnul Muslim App

A fully responsive and SEO-optimized Islamic web application that presents categorized Duas from *Hisnul Muslim*, with references, translations, and clean UI/UX for both desktop and mobile users.

---

## 🌐 Live Demo

- **Frontend (Next.js App):** [https://dua-ruqyah-frontend-virid.vercel.app/](https://dua-ruqyah-frontend-virid.vercel.app/)
- **Backend (Express + SQLite API):** [https://dua-ruqyah-1.onrender.com/](https://dua-ruqyah-1.onrender.com/)

---

## 🖼 Screenshots

### 🖥 Desktop View
![image](https://github.com/user-attachments/assets/6bd5853f-cddb-4b99-8339-b48746144a1b)


### 📱 Mobile View
![image](https://github.com/user-attachments/assets/c02da8f3-c27e-4b28-89ae-513b6d872975)

### ❓ Performance
![image](https://github.com/user-attachments/assets/7a286681-47ad-4e4b-a534-cf7672f66d6e)

---

## 🏗️ Project Structure

This project is a **monorepo** powered by **TurboRepo** and consists of two main applications:

### ✅ Frontend (`apps/frontend`)
- **Built with:** Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **UI Enhancements:** Framer Motion for animation, RTL Arabic support, category/subcategory navigation
- **Features:**
  - Displays Duas by categories and subcategories
  - Fully responsive layout (mobile-first design)
  - Modern sidebar navigation
  - Dynamic Arabic + Translation + Reference section
  - Font size, appearance, and reading mode settings

### 🔁 Backend (`apps/backend`)
- **Built with:** Node.js + Express + TypeScript
- **Database:** SQLite (`dua_main.sqlite`)
- **API Routes:**
  - `/categories` – Get all categories
  - `/subcategories/:categoryId` – Get subcategories by category
  - `/duas/:subCategoryId` – Get duas for each subcategory
- **Hosted on:** [Render](https://dua-ruqyah-1.onrender.com/)
- **Optimized queries for performance**

---

## ⚡ Static Site Generation (SSG)

- The frontend uses **Next.js SSG** (`getStaticProps`/`generateStaticParams`) for:
  - Pre-rendering all top-level categories at build time
  - SEO benefits and lightning-fast loading of static content
- Only subcategory content is dynamically fetched client-side for optimized performance

---

## 🛠 Tech Stack

| Stack       | Tools / Libraries                         |
|-------------|--------------------------------------------|
| Frontend    | Next.js, Tailwind CSS, TypeScript, Framer Motion |
| Backend     | Node.js, TypeScript, SQLite             |
| Monorepo    | TurboRepo                                 |
| Hosting     | Vercel (Frontend), Render (Backend)       |
| Database    | SQLite (served from `/apps/backend/db/dua_main.sqlite`) |

---

## 📂 Folder Structure

```bash
/apps
  ├── backend      # Node.js + SQLite REST API
  └── frontend     # Next.js frontend app

/turbo.json        # TurboRepo config

## How to Replicate
git clone https://github.com/yourusername/dua-ruqyah.git
cd dua-ruqyah
npm install
npm run dev/build
