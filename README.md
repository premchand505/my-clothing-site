You're absolutely right. Here are clean, well-structured README files that will maintain proper formatting when copied:

## **1. Root README.md**

```markdown
# Movies & TV Shows Management App

Full-stack application for managing movies and TV shows with image upload functionality.

## 🌐 Live Demo

**Frontend:** https://movies-tvshows-app.vercel.app  
**Backend API:** https://backend-service-659948353959.us-central1.run.app

## ✨ Features

- User Authentication (JWT + httpOnly cookies)
- CRUD operations for movies/TV shows  
- Image upload to Google Cloud Storage
- Search with full-text indexing
- Infinite scroll pagination
- Responsive UI with Tailwind CSS

## 🏗️ Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui  
**Backend:** Node.js, Express 5, Prisma, MySQL  
**Cloud:** Google Cloud Run, Google Cloud Storage, Vercel  
**Architecture:** Monorepo with Turborepo

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MySQL database
- Google Cloud Storage bucket

### Installation

1. Clone and install dependencies
```bash
git clone <repository-url>
cd movies-tvshows-app
npm install
```

2. Configure environment variables

**Backend** (`apps/backend/.env`):
```env
DATABASE_URL="mysql://user:password@host:port/db"
JWT_SECRET="your-secret-key"
GCS_BUCKET_NAME="your-bucket"
GCP_PROJECT_ID="your-project-id"
```

**Frontend** (`apps/frontend/.env.local`):
```env
VITE_API_URL=http://localhost:5000/api
```

3. Setup database
```bash
cd apps/backend
npm run prisma -- migrate deploy
```

4. Start development
```bash
npm run dev
```

## 📁 Project Structure

```
movies-tvshows-app/
├── apps/
│   ├── backend/         # Express API
│   └── frontend/        # React App
├── packages/
│   └── types/          # Shared types
└── Dockerfile          # Backend container
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| GET | `/api/movies` | List movies |
| POST | `/api/movies` | Create movie |
| PUT | `/api/movies/:id` | Update movie |
| DELETE | `/api/movies/:id` | Delete movie |

## 🚢 Deployment

### Backend (Google Cloud Run)
```bash
gcloud builds submit --tag gcr.io/PROJECT/backend
gcloud run deploy backend-service --image gcr.io/PROJECT/backend
```

### Frontend (Vercel)
Connect GitHub repository and deploy with environment variables

## 📝 License

Created for technical assessment
```

## **2. apps/frontend/README.md**

```markdown
# Frontend - Movies & TV Shows App

React application with TypeScript and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev       # Start dev server on :5173
npm run build     # Build for production
```

## 🛠️ Built With

- **React 18** with TypeScript
- **Vite** - Build tool
- **Tailwind CSS** + **shadcn/ui**
- **React Hook Form** + **Zod**
- **TanStack Table**
- **Axios** for API calls

## 📁 Structure

```
src/
├── components/
│   ├── custom/       # App components
│   └── ui/          # shadcn components
├── pages/           # Route pages
├── context/         # Auth context
└── services/        # API layer
```

## ⚙️ Configuration

Create `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

## 🎨 Key Components

### MovieForm
Handles create/edit operations with image upload

### MovieTable  
Data table with search, pagination, and actions

### AuthContext
Manages authentication state globally

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview build locally |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

Deployed on Vercel with automatic builds from GitHub.

### Environment Variables
- `VITE_API_URL` - Backend API URL
```

## **3. apps/backend/README.md**

```markdown
# Backend - Movies & TV Shows API

Express.js REST API with TypeScript, Prisma, and Google Cloud Storage.

## 🚀 Quick Start

```bash
npm install
npm run prisma -- migrate deploy
npm run dev       # Start dev server on :5000
npm run build     # Build for production
```

## 🛠️ Built With

- **Express 5** with TypeScript
- **Prisma ORM** with MySQL
- **JWT Authentication**
- **Google Cloud Storage**
- **Multer** for file uploads
- **Zod** for validation

## 📁 Structure

```
src/
├── controllers/     # Request handlers
├── middleware/      # Auth, upload, validation
├── routes/         # API routes
├── utils/          # Helpers
└── app.ts          # Server entry
```

## ⚙️ Configuration

Create `.env`:
```env
DATABASE_URL="mysql://user:pass@host:port/db"
JWT_SECRET="secret-key"
GCS_BUCKET_NAME="bucket-name"
GCP_PROJECT_ID="project-id"
PORT=5000
```

## 🗄️ Database Schema

```prisma
model User {
  id       Int     @id @default(autoincrement())
  email    String  @unique
  password String
  name     String?
  movies   Movie[]
}

model Movie {
  id       Int     @id @default(autoincrement())
  title    String
  type     String
  director String
  year     String
  poster   String? @db.VarChar(1024)
  userId   Int
  user     User    @relation(fields: [userId], references: [id])
}
```

## 🔐 Authentication

- JWT tokens in httpOnly cookies
- 7-day expiration
- Protected routes require valid token

## 📤 File Upload

- Max size: 5MB
- Formats: JPEG, PNG, GIF, WebP
- Storage: Google Cloud Storage
- Public URLs generated

## 🐳 Docker

```bash
docker build -t backend .
docker run -p 8080:8080 --env-file .env backend
```

## ☁️ Deployment

```bash
# Google Cloud Run
gcloud builds submit --tag gcr.io/PROJECT/backend
gcloud run deploy --image gcr.io/PROJECT/backend
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with nodemon |
| `npm run build` | Compile TypeScript |
| `npm run start` | Run production |
| `npm run prisma` | Prisma CLI |
```

These README files are:
- **Clean and concise** - Only essential information
- **Well-structured** - Clear sections and formatting
- **Copy-paste friendly** - Maintains structure when pasted
- **Professional** - Shows technical competence
- **Easy to navigate** - Clear hierarchy and organization

Each file focuses on what's most important for that specific part of the project.
