1. Root Directory README (./README.md)
This README provides a high-level overview of the monorepo, global setup instructions, and links to the specific application READMEs.

Markdown

# 🚀 Movies-TV Shows App (Full-Stack Monorepo)

<p align="center">
  <strong>A full-stack application for tracking your personal movie and TV show collection.</strong>
</p>

<p align="center">
  <a href="#-getting-started">Quick Start</a> •
  <a href="#-workspaces">Workspaces</a> •
  <a href="#-tech-stack-overview">Tech Stack</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Turborepo-latest-blue?logo=turborepo" alt="Turborepo">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Express.js-5.0-black?logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql" alt="MySQL">
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker" alt="Docker">
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack Overview](#-tech-stack-overview)
- [Monorepo Structure](#-monorepo-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Workspaces](#-workspaces)
- [Deployment Architecture](#-deployment-architecture)
- [License](#-license)

---

## 📖 Overview

This repository contains the source code for the "Movies-TV Shows App," a full-stack web application built within a Turborepo monorepo. It allows users to register, log in, and manage a personal library of movies and TV shows, including details and poster images.

The project is divided into two main applications:
-   **`frontend`**: A React application built with Vite and Tailwind CSS.
-   **`backend`**: An Express.js REST API with a MySQL database managed by Prisma.

---

## 🛠️ Tech Stack Overview

-   **Monorepo:** [Turborepo](https://turbo.build/repo)
-   **Frontend:** [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [TanStack Table](https://tanstack.com/table/)
-   **Backend:** [Express.js](https://expressjs.com/), [Node.js](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Database:** [MySQL](https://www.mysql.com/) + [Prisma ORM](https://www.prisma.io/)
-   **File Storage:** [Google Cloud Storage](https://cloud.google.com/storage)
-   **Authentication:** JWTs stored in `httpOnly` cookies
-   **Containerization:** [Docker](https://www.docker.com/)
-   **Deployment:**
    -   Frontend on [Vercel](https://vercel.com/)
    -   Backend on [Google Cloud Run](https://cloud.google.com/run)

---

## 📁 Monorepo Structure
movies-tvshows-app/
├── apps/
│ ├── backend/ # Express.js REST API
│ └── frontend/ # React (Vite) Client
├── packages/
│ └── types/ # Shared TypeScript types
├── .dockerignore
├── .gitignore
├── Dockerfile # For backend deployment
├── package.json
└── turbo.json

text


---

## 🚀 Getting Started

### Prerequisites
- Node.js v18.0 or later
- npm v10.0 or later
- A MySQL database (e.g., from [Railway](https://railway.app/), or a local instance)
- Google Cloud Storage bucket for file uploads

### Setup Steps

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    cd movies-tvshows-app
    ```

2.  **Install all dependencies from the root**
    This will install dependencies for all workspaces (`frontend`, `backend`, `types`).
    ```bash
    npm install
    ```

3.  **Set up environment variables**
    You need to configure `.env` files for both the frontend and backend. Follow the detailed instructions in their respective README files:
    -   [Backend Environment Setup](./apps/backend/README.md#-installation)
    -   [Frontend Environment Setup](./apps/frontend/README.md#-getting-started)

4.  **Run database migrations**
    This command applies the database schema to your MySQL database.
    ```bash
    npm run prisma -- migrate dev --workspace=backend
    ```

5.  **Run all applications in development mode**
    This will start both the backend and frontend servers concurrently.
    ```bash
    npm run dev
    ```
    -   Frontend will be available at `http://localhost:5173`
    -   Backend will be available at `http://localhost:5000`

---

## 📜 Available Scripts

These scripts are run from the root of the monorepo.

- `npm run dev`: Starts all applications in development mode.
- `npm run build`: Builds all applications for production.
- `npm run lint`: Lints all applications.
- `npm run format`: Formats all code with Prettier.

---

## 📦 Workspaces

This monorepo contains the following workspaces. See their individual READMEs for more detailed information.

| Workspace                                          | Description                                                 |
| -------------------------------------------------- | ----------------------------------------------------------- |
| [**`apps/frontend`**](./apps/frontend/README.md)     | The React client application.                               |
| [**`apps/backend`**](./apps/backend/README.md)       | The Express.js REST API server.                             |
| [**`packages/types`**](./packages/types/README.md)   | Shared TypeScript types between frontend and backend.       |


---

## ☁️ Deployment Architecture

-   The **Backend** is containerized using the root `Dockerfile` and deployed as a serverless container on **Google Cloud Run**.
-   The **Frontend** is deployed as a static site on **Vercel**, configured to communicate with the live backend API.
-   Poster images are uploaded directly from the backend to a **Google Cloud Storage** bucket.
-   The MySQL database is hosted on **Railway**.

---

## 📄 License

This project is licensed under the MIT License.
