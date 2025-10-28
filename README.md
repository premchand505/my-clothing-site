# 🎬 Movies & TV Shows Management App

<p align="center">
  <strong>Full-stack application for managing your favorite movies and TV shows</strong>
</p>

<p align="center">
  <a href="https://movies-tvshows-app.vercel.app">Live Demo</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#deployment">Deploy</a> •
  <a href="#documentation">Documentation</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Express-5.1-000000?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/Prisma-6.18-2D3748?logo=prisma" alt="Prisma">
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql" alt="MySQL">
  <img src="https://img.shields.io/badge/Turborepo-Ready-EF4444?logo=turborepo" alt="Turborepo">
</p>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Development](#development)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

A modern, full-stack application built with a **monorepo architecture** using Turborepo. Manage your collection of movies and TV shows with features like image uploads, search, infinite scroll, and secure authentication.

**Live Application:**
- **Frontend:** https://movies-tvshows-app.vercel.app
- **Backend API:** https://backend-service-659948353959.us-central1.run.app

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure JWT-based authentication
- HttpOnly cookie storage for tokens
- Protected routes and API endpoints
- User registration and login

### 🎥 Movie & TV Show Management
- ✅ Create, Read, Update, Delete (CRUD) operations
- ✅ Upload poster images to Google Cloud Storage
- ✅ Search functionality with full-text search
- ✅ Infinite scroll pagination
- ✅ Filter by type (Movie/TV Show)
- ✅ Rich metadata (director, year, budget, duration, location)

### 🖼️ Image Management
- Cloud-based storage using Google Cloud Storage
- Automatic image URL generation
- 5MB file size limit
- Support for common image formats

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- shadcn/ui component library
- React Table for data display
- Form validation with Zod
- Toast notifications

---

## 🛠 Tech Stack

### Monorepo Architecture
- **Turborepo** - High-performance build system
- **npm Workspaces** - Package management

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2 | UI library |
| TypeScript | 5.2 | Type safety |
| Vite | 5.2 | Build tool |
| React Router | 6.23 | Routing |
| TanStack Table | 8.16 | Data tables |
| Tailwind CSS | 3.4 | Styling |
| shadcn/ui | Latest | UI components |
| Axios | 1.6 | HTTP client |
| React Hook Form | 7.51 | Form handling |
| Zod | 3.23 | Schema validation |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Express.js | 5.1 | Web framework |
| TypeScript | 5.9 | Type safety |
| Prisma | 6.18 | ORM |
| MySQL | 8.0 | Database |
| JWT | 9.0 | Authentication |
| Bcrypt | 3.0 | Password hashing |
| Multer | 2.0 | File uploads |
| Google Cloud Storage | 7.17 | Image storage |

### Infrastructure
- **Database:** Railway MySQL
- **Backend Hosting:** Google Cloud Run
- **Frontend Hosting:** Vercel
- **Image Storage:** Google Cloud Storage
- **CI/CD:** Docker, Google Cloud Build

---

## 📁 Project Structure
movies-tvshows-app/
├── apps/
│ ├── backend/ # Express.js API
│ │ ├── prisma/
│ │ │ ├── migrations/
│ │ │ └── schema.prisma
│ │ ├── src/
│ │ │ ├── controllers/
│ │ │ ├── middleware/
│ │ │ ├── routes/
│ │ │ ├── utils/
│ │ │ ├── validators/
│ │ │ └── app.ts
│ │ ├── .env
│ │ ├── package.json
│ │ └── tsconfig.json
│ └── frontend/ # React application
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ └── services/
│ ├── package.json
│ └── vite.config.ts
├── packages/
│ └── types/ # Shared TypeScript types
│ ├── index.ts
│ └── package.json
├── Dockerfile
├── docker-compose.yml
├── turbo.json
└── package.json

text


---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or later
- **npm** 10.5 or later
- **MySQL** 8.0+ (or Railway account)
- **Google Cloud Account** (for image storage)
- **Docker** (optional)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/movies-tvshows-app.git
cd movies-tvshows-app
Install dependencies
Bash

npm install
Set up environment variables
Bash

# Backend
cp apps/backend/.env.example apps/backend/.env

# Frontend
cp apps/frontend/.env.example apps/frontend/.env.local
Configure environment variables
Edit apps/backend/.env:

env

DATABASE_URL="mysql://user:password@host:port/database"
JWT_SECRET="your-super-secret-jwt-key-min-64-characters"
PORT=5000
NODE_ENV=development
GCS_BUCKET_NAME="your-gcs-bucket-name"
GCP_PROJECT_ID="your-gcp-project-id"
Edit apps/frontend/.env.local:

env

VITE_API_URL=http://localhost:5000/api
Set up Google Cloud Storage
Bash

# Create a service account and download credentials
# Save as apps/backend/gcp-service-account.json

# Set environment variable
export GOOGLE_APPLICATION_CREDENTIALS="./apps/backend/gcp-service-account.json"
Initialize database
Bash

cd apps/backend
npx prisma generate
npx prisma migrate dev
cd ../..
Start development servers
Bash

npm run dev
The application will be available at:

Frontend: http://localhost:5173
Backend: http://localhost:5000
💻 Development
Available Scripts
Root Level
Bash

npm run dev          # Start all apps in development mode
npm run build        # Build all apps
npm run lint         # Lint all apps
Backend
Bash

cd apps/backend
npm run dev          # Start with nodemon
npm run build        # Compile TypeScript
npm run start        # Run production build
npm run prisma       # Prisma CLI commands
Frontend
Bash

cd apps/frontend
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
Database Migrations
Bash

cd apps/backend

# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations (production)
npx prisma migrate deploy

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio
🐳 Docker
Build and Run with Docker
Bash

# Build image
docker build -t movies-tvshows-app-backend .

# Run container
docker run -p 5000:5000 --env-file apps/backend/.env movies-tvshows-app-backend
Docker Compose
Bash

# Start all services
docker-compose up

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
☁️ Deployment
Backend (Google Cloud Run)
Build and push Docker image
Bash

# Set variables
PROJECT_ID="your-gcp-project-id"
REGION="us-central1"
REPO_NAME="movies-tvshows-app"
IMAGE_NAME="backend"

# Configure Docker for Artifact Registry
gcloud auth configure-docker $REGION-docker.pkg.dev

# Build image
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME .

# Push image
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME
Deploy to Cloud Run
Bash

gcloud run deploy backend-service \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME \
  --region $REGION \
  --allow-unauthenticated \
  --port 5000 \
  --set-env-vars DATABASE_URL="mysql://user:password@host:port/database" \
  --set-env-vars JWT_SECRET="your-secret" \
  --set-env-vars GCS_BUCKET_NAME="your-bucket" \
  --set-env-vars GCP_PROJECT_ID="your-project-id" \
  --set-env-vars NODE_ENV="production" \
  --min-instances 0 \
  --max-instances 10
Run database migrations
Bash

cd apps/backend
DATABASE_URL="your-production-url" npx prisma migrate deploy
Frontend (Vercel)
Install Vercel CLI
Bash

npm install -g vercel
Deploy
Bash

cd apps/frontend
vercel --prod
Set environment variables in Vercel dashboard
env

VITE_API_URL=https://your-backend-url.run.app/api
🔐 Environment Variables
Backend (apps/backend/.env)
Variable	Description	Example
DATABASE_URL	MySQL connection string	mysql://user:pass@host:port/db
JWT_SECRET	Secret key for JWT signing	your-64-char-secret
PORT	Server port	5000
NODE_ENV	Environment	development / production
GCS_BUCKET_NAME	Google Cloud Storage bucket	movies-posters
GCP_PROJECT_ID	Google Cloud project ID	your-project-id
Frontend (apps/frontend/.env.local)
Variable	Description	Example
VITE_API_URL	Backend API URL	http://localhost:5000/api
📚 API Documentation
Base URLs
Development: http://localhost:5000/api
Production: https://backend-service-659948353959.us-central1.run.app/api
Authentication Endpoints
Register User
http

POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "name": "John Doe"
}
Response:

JSON

{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
Login
http

POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}
Get Current User
http

GET /auth/me
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Logout
http

POST /auth/logout
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Movie Endpoints
Get All Movies
http

GET /movies?page=1&limit=20&search=inception&type=movie
Query Parameters:

page - Page number (default: 1)
limit - Items per page (default: 20)
search - Search query (title, director)
type - Filter by type (movie/tvshow)
Response:

JSON

{
  "movies": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 20,
    "totalPages": 5
  }
}
Get Single Movie
http

GET /movies/:id
Create Movie
http

POST /movies
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Content-Type: multipart/form-data

title: "Inception"
type: "movie"
director: "Christopher Nolan"
year: "2010"
budget: "$160M"
duration: "148 min"
location: "USA"
poster: [file]
Update Movie
http

PUT /movies/:id
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Content-Type: multipart/form-data

title: "Inception"
[other fields...]
Delete Movie
http

DELETE /movies/:id
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Health Check
http

GET /health
For detailed API documentation, see:

Backend README
Frontend README
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch
Bash

git checkout -b feature/amazing-feature
Make your changes
Commit your changes
Bash

git commit -m 'feat: add amazing feature'
Push to the branch
Bash

git push origin feature/amazing-feature
Open a Pull Request
Commit Convention
feat: New feature
fix: Bug fix
docs: Documentation changes
style: Code formatting
refactor: Code restructuring
test: Adding tests
chore: Maintenance tasks
📄 License
This project is licensed under the MIT License.

text

MIT License

Copyright (c) 2025 Movies & TV Shows App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
🙏 Acknowledgments
Turborepo - Monorepo build system
shadcn/ui - Beautiful UI components
Prisma - Next-generation ORM
Railway - Database hosting
Google Cloud - Cloud infrastructure
<p align="center"> Made with ❤️ using React & Express <br><br> <a href="https://github.com/yourusername/movies-tvshows-app/issues">Report Bug</a> • <a href="https://github.com/yourusername/movies-tvshows-app/issues">Request Feature</a> </p> ```
