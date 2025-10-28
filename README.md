Of course. Based on the comprehensive project report and the provided reference README, I will create three separate, detailed README files for your project: one for the root directory, one for the backend application, and one for the frontend application.

Here are the three README files, tailored to your project's specific technologies and structure.

---
---

## 1. Root Directory README (`./README.md`)

This README provides a high-level overview of the monorepo, global setup instructions, and links to the specific application READMEs.

```markdown
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
```

---
---

## 2. Backend README (`./apps/backend/README.md`)

This is a detailed README for the Express.js backend, based on your template.

```markdown
# 🎬 Movies-TV Shows App Backend API

<p align="center">
  <strong>RESTful API for managing a personal movie and TV show collection.</strong>
</p>

<p align="center">
  <a href="https://backend-service-659948353959.us-central1.run.app/api/health">Live API</a> •
  <a href="#-installation">Quick Start</a> •
  <a href="#-api-endpoints">API Docs</a> •
  <a href="#-deployment">Deploy</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Express.js-5.0-black?logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql" alt="MySQL">
  <img src="https://img.shields.io/badge/Prisma-6.18-2D3748?logo=prisma" alt="Prisma">
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker" alt="Docker">
</p>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Database Setup](#-database-setup)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [File Uploads](#-file-uploads)
- [Docker](#-docker)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

- 🔐 **JWT Authentication** - Secure auth using JWTs in `httpOnly` cookies.
- 🗄️ **MySQL + Prisma** - Type-safe database access and schema management.
- 📤 **Cloud Storage Uploads** - Direct file uploads to Google Cloud Storage.
- 🐳 **Docker Ready** - Fully containerized for consistent deployment.
- ☁️ **Cloud Native** - Designed for and deployed on Google Cloud Run.
- 📝 **Input Validation** - Request validation using Zod schemas.
- 🔄 **CORS Enabled** - Configured for the deployed frontend application.
- 🚀 **Monorepo Integration** - Shares types with the frontend via Turborepo.

---

## 🛠 Tech Stack

### Core Framework
- **Express.js 5.x** - Web application framework for Node.js
- **TypeScript 5.x** - For strong typing and safety
- **MySQL** - Relational database
- **Prisma 6.x** - Type-safe ORM

### Authentication & Security
- **JSON Web Token (JWT)** - For token-based auth
- **Bcrypt.js** - Password hashing
- **cookie-parser** - To manage auth tokens in cookies

### External Services
- **Google Cloud Storage** - For storing poster images
- **Railway** - Managed MySQL hosting

---

## 🚀 Installation

### Prerequisites
- All prerequisites from the [root README](../../README.md#-getting-started).
- A Google Cloud Storage bucket and credentials.

### Setup Steps

1.  **Follow the root `Getting Started` guide first.** This README assumes you have cloned the repo and run `npm install` from the root.

2.  **Set up environment variables**
    Create a `.env` file in this directory (`apps/backend/.env`).
    ```bash
    cp .env.example .env
    ```

3.  **Configure your `.env` file**
    ```env
    # Database (get this from your DB provider like Railway)
    DATABASE_URL="mysql://user:password@host:port/database"

    # Authentication
    JWT_SECRET="your-super-secret-jwt-key-with-at-least-32-characters"

    # Server
    PORT=5000
    NODE_ENV=development

    # Google Cloud Storage
    GCS_BUCKET_NAME="your-gcs-bucket-name"
    GCP_PROJECT_ID="your-gcp-project-id"
    # Note: GCS credentials should be configured via `gcloud auth application-default login` for local dev
    ```

4.  **Set up the database**
    This command (run from the root) will apply the schema to your database.
    ```bash
    npm run prisma -- migrate dev --workspace=backend
    ```

5.  **Run the development server**
    This command (run from the root) will start both the frontend and backend.
    ```bash
    npm run dev
    ```
    The backend API will be running at `http://localhost:5000`.

---

## 📁 Project Structure

```
apps/backend/
├── prisma/
│   ├── migrations/
│   └── schema.prisma         # Database schema
├── src/
│   ├── controllers/          # Request handlers
│   ├── middleware/           # Express middleware (auth, upload, error handling)
│   ├── routes/               # API route definitions
│   ├── utils/                # Utility functions (e.g., prisma client)
│   ├── validators/           # Zod validation schemas
│   └── app.ts                # Application entry point
├── .env                      # Environment variables
├── package.json
└── tsconfig.json
```

---

## 🗄️ Database Setup

### Prisma Schema
The schema (`prisma/schema.prisma`) defines the `User` and `Movie` models.

```prisma
// prisma/schema.prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-1.1.x"]
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  // ...
}

model Movie {
  id        Int      @id @default(autoincrement())
  title     String
  poster    String?   @db.VarChar(1024)
  // ...
  user      User     @relation(fields: [userId], references: [id])
  userId    Int
}
```

### Database Commands (run from root)
```bash
# Create a new migration after schema changes
npm run prisma -- migrate dev --name <migration_name> --workspace=backend

# Apply migrations to a production database
npm run prisma -- migrate deploy --workspace=backend

# Generate the Prisma Client
npm run prisma -- generate --workspace=backend

# Open Prisma Studio to view/edit data
npm run prisma -- studio --workspace=backend
```

---

## 📚 API Endpoints

**Base URL:**
-   **Production:** `https://backend-service-659948353959.us-central1.run.app/api`
-   **Development:** `http://localhost:5000/api`

### Auth Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Log in a user and set `httpOnly` cookie |
| `POST` | `/auth/logout` | Log out user and clear cookie |
| `GET` | `/auth/me` | Get current logged-in user's profile |

### Movie Endpoints

| Method | Endpoint | Auth | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/movies` | ✅ | Get all movies for the logged-in user (paginated) |
| `POST` | `/movies` | ✅ | Create a new movie (handles `multipart/form-data` for poster) |
| `GET` | `/movies/:id` | ✅ | Get a single movie by ID |
| `PUT` | `/movies/:id` | ✅ | Update a movie (handles `multipart/form-data` for poster) |
| `DELETE`| `/movies/:id` | ✅ | Delete a movie |

---

## 🔐 Authentication

Authentication is handled via JWTs. After a successful login, a token is signed and sent to the client in a secure, `httpOnly` cookie. This cookie is automatically sent with subsequent requests.

Protected routes use a custom `protect` middleware (`src/middleware/auth.ts`) that verifies the JWT from the incoming request's cookies. If the token is valid, the user's data is attached to the `Request` object; otherwise, an `Unauthorized` error is thrown.

---

## 📤 File Uploads

File uploads are configured to stream directly to **Google Cloud Storage**.

-   **Library:** [Multer](https://github.com/expressjs/multer) is used to handle `multipart/form-data`.
-   **Storage:** Instead of saving to disk, files are temporarily stored in memory (`multer.memoryStorage()`).
-   **Upload Process:** A custom middleware (`src/middleware/upload.ts`) takes the file buffer from `req.file` and streams it to the configured GCS bucket using the `@google-cloud/storage` SDK.
-   **Result:** The public URL of the uploaded file is then attached to `req.file.path` and saved to the database.

---

## 🐳 Docker

The application is containerized using the `Dockerfile` in the project root. This file is optimized for production deployment on services like Google Cloud Run.

### Dockerfile Breakdown
-   **Build Stage:** Installs all monorepo dependencies, copies all source code, and runs `turbo build` to build only the backend.
-   **Production Stage:** Copies only the necessary build artifacts (`dist/`), `node_modules`, and `prisma` files from the builder stage, resulting in a smaller, more secure final image.

### Build and Run Locally
```bash
# Build the Docker image (from the root directory)
docker build -t movies-tvshows-backend .

# Run the container, passing your .env file
docker run -p 5000:8080 --env-file ./apps/backend/.env movies-tvshows-backend
```
*(Note: Cloud Run injects its own `PORT` env var, which defaults to 8080. The Dockerfile `EXPOSE`s 8080 to match this.)*

---

## ☁️ Deployment

The backend is deployed to **Google Cloud Run**.

### Prerequisites
- [Google Cloud SDK](https://cloud.google.com/sdk) installed and configured (`gcloud init`).
- You have pushed your Docker image to Google Artifact Registry.

### Deploy Command
This command deploys the container image and sets the required environment variables.
```bash
gcloud run deploy movies-tvshows-app-backend \
  --image REGION-docker.pkg.dev/PROJECT_ID/REPO/IMAGE:latest \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="DATABASE_URL=your-full-db-url" \
  --set-env-vars="JWT_SECRET=your-jwt-secret" \
  --set-env-vars="GCS_BUCKET_NAME=your-gcs-bucket-name" \
  --set-env-vars="GCP_PROJECT_ID=your-gcp-project-id" \
  --set-env-vars="NODE_ENV=production"
```

---

## 📄 License

This project is licensed under the MIT License.
```

---
---

## 3. Frontend README (`./apps/frontend/README.md`)

This is a standard README for the React/Vite frontend application.

```markdown
# 🎬 Movies-TV Shows App Frontend

<p align="center">
  <strong>A React client for browsing and managing a personal movie and TV show collection.</strong>
</p>

<p align="center">
  <a href="#-getting-started">Quick Start</a> •
  <a href="https://movies-tvshows-app.vercel.app">Live Site</a> •
  <a href="#-deployment">Deploy</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css" alt="Tailwind CSS">
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [License](#-license)

---

## 📖 Overview

This is the frontend for the Movies-TV Shows App, built with React and Vite. It provides a user interface for all features offered by the backend API, including user authentication, creating, viewing, updating, and deleting movies.

It is designed to be a fast, modern Single Page Application (SPA) and is styled using Tailwind CSS and shadcn/ui components.

---

## ✨ Features

- **User Authentication:** Login, Signup, and persistent sessions.
- **CRUD Operations:** A full interface for managing movie entries.
- **Data Tables:** Displays movie data cleanly using TanStack React Table.
- **Forms:** Robust and validated forms using React Hook Form and Zod.
- **Responsive Design:** Mobile-first design that works on all screen sizes.
- **Component-Based:** Built with reusable React components.
- **Protected Routes:** Client-side routing that protects dashboard pages from unauthenticated access.

---

## 🛠 Tech Stack

- **Core:** [React 18](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **State Management:** React Context API for auth state.
- **Data Fetching:** [Axios](https://axios-http.com/)
- **Tables:** [TanStack React Table](https://tanstack.com/table/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for validation.

---

## 🚀 Getting Started

### Prerequisites
- All prerequisites from the [root README](../../README.md#-getting-started).

### Setup Steps

1.  **Follow the root `Getting Started` guide first.** This README assumes you have cloned the repo and run `npm install` from the root.

2.  **Set up environment variables**
    Create a `.env.local` file in this directory (`apps/frontend/.env.local`).
    ```bash
    cp .env.example .env.local
    ```

3.  **Configure your `.env.local` file**
    This file should point to the backend API.
    ```env
    # For local development, point to your local backend server
    VITE_API_URL=http://localhost:5000/api
    ```

4.  **Run the development server**
    This command (run from the root) will start both the frontend and backend servers.
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```
apps/frontend/
├── src/
│   ├── components/
│   │   ├── custom/           # Custom reusable components (e.g., MovieForm, MainLayout)
│   │   └── ui/               # Auto-generated shadcn/ui components
│   ├── context/              # React Context providers (e.g., AuthContext)
│   ├── pages/                # Route-level components (e.g., Dashboard, Login)
│   ├── services/             # API interaction layer (e.g., api.ts with Axios)
│   ├── App.tsx               # Main app component with routing
│   └── main.tsx              # Application entry point
├── .env.local                # Local environment variables
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📜 Available Scripts

These scripts are run from the root directory using the `--filter` flag, or via the top-level `turbo` scripts.

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app for production.
- `npm run lint`: Lints the codebase with ESLint.
- `npm run preview`: Serves the production build locally.

---

## ☁️ Deployment

The frontend is deployed to **Vercel**.

### Setup Steps on Vercel
1.  Connect your Git repository to a new Vercel project.
2.  **Configure Project Settings:**
    -   **Framework Preset:** `Vite`
    -   **Root Directory:** `apps/frontend`
3.  **Set Environment Variables:**
    In the Vercel project settings, add the following environment variable to point to your live backend API:
    -   `VITE_API_URL`: `https://backend-service-659948353959.us-central1.run.app/api`
4.  Deploy! Vercel will automatically build and deploy the site upon every push to the `main` branch.

---

## 📄 License

This project is licensed under the MIT License.
```
