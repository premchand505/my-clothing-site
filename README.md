You are absolutely right. I apologize. It's clear the formatting is causing problems when you paste it. The complex markdown elements like the shield badges and multi-column tables are not transferring correctly.

Let's try a different approach.

I will generate a much simpler, more "bulletproof" version of the README. It will have all the same essential information but will avoid the complex formatting that is likely breaking. It will look plainer, but it should copy and paste perfectly.

Here is the simplified **root README**.

---

```markdown
# Movies-TV Shows App (Full-Stack Monorepo)

A full-stack application for tracking your personal movie and TV show collection.

---

## Overview

This repository contains the source code for the "Movies-TV Shows App," a full-stack web application built within a Turborepo monorepo. It allows users to register, log in, and manage a personal library of movies and TV shows, including details and poster images.

The project is divided into two main applications:
-   `frontend`: A React application built with Vite and Tailwind CSS.
-   `backend`: An Express.js REST API with a MySQL database managed by Prisma.

---

## Tech Stack Overview

-   **Monorepo:** Turborepo
-   **Frontend:** React, Vite, TypeScript, Tailwind CSS, TanStack Table
-   **Backend:** Express.js, Node.js, TypeScript
-   **Database:** MySQL + Prisma ORM
-   **File Storage:** Google Cloud Storage
-   **Authentication:** JWTs stored in httpOnly cookies
-   **Containerization:** Docker
-   **Deployment:**
    -   Frontend on Vercel
    -   Backend on Google Cloud Run

---

## Monorepo Structure

```
movies-tvshows-app/
├── apps/
│   ├── backend/        # Express.js REST API
│   └── frontend/       # React (Vite) Client
├── packages/
│   └── types/          # Shared TypeScript types
├── .dockerignore
├── .gitignore
├── Dockerfile          # For backend deployment
├── package.json
└── turbo.json
```

---

## Getting Started

### Prerequisites
-   Node.js v18.0 or later
-   npm v10.0 or later
-   A MySQL database (e.g., from Railway, or a local instance)
-   Google Cloud Storage bucket for file uploads

### Setup Steps

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    cd movies-tvshows-app
    ```

2.  **Install all dependencies from the root**
    This will install dependencies for all workspaces.
    ```bash
    npm install
    ```

3.  **Set up environment variables**
    You need to configure `.env` files for both the frontend and backend. Follow the instructions in their respective README files.
    -   [Backend Setup](./apps/backend/README.md)
    -   [Frontend Setup](./apps/frontend/README.md)

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

## Available Scripts

These scripts are run from the root of the monorepo.

-   `npm run dev`: Starts all applications in development mode.
-   `npm run build`: Builds all applications for production.
-   `npm run lint`: Lints all applications.
-   `npm run format`: Formats all code with Prettier.

---

## Workspaces

This monorepo contains the following workspaces. See their individual READMEs for more detailed information.

-   **`apps/frontend`**: The React client application.
-   **`apps/backend`**: The Express.js REST API server.
-   **`packages/types`**: Shared TypeScript types between frontend and backend.

---

## Deployment Architecture

-   The **Backend** is containerized using the root `Dockerfile` and deployed as a serverless container on **Google Cloud Run**.
-   The **Frontend** is deployed as a static site on **Vercel**, configured to communicate with the live backend API.
-   Poster images are uploaded directly from the backend to a **Google Cloud Storage** bucket.
-   The MySQL database is hosted on **Railway**.

---

## License

This project is licensed under the MIT License.
```

---

Please try copying this version. If it works well, I will generate the `backend` and `frontend` READMEs in the same simplified style.
