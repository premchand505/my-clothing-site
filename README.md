. Root README.md
Markdown

# 🎬 Movies & TV Shows Management App

A full-stack web application for managing movies and TV shows, built with modern technologies in a monorepo architecture.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Live Demo

- **Frontend**: [https://movies-tvshows-app.vercel.app](https://movies-tvshows-app.vercel.app)
- **Backend API**: [https://backend-service-659948353959.us-central1.run.app](https://backend-service-659948353959.us-central1.run.app)

## 📋 Features

- ✅ User Authentication (JWT-based with httpOnly cookies)
- ✅ Create, Read, Update, Delete movies/TV shows
- ✅ Image upload to Google Cloud Storage
- ✅ Search functionality with full-text search
- ✅ Infinite scroll pagination
- ✅ Responsive design with Tailwind CSS
- ✅ Type-safe development with TypeScript
- ✅ Monorepo architecture with Turborepo

## 🏗️ Architecture
movies-tvshows-app/
├── apps/
│ ├── backend/ # Express.js API server
│ └── frontend/ # React + Vite application
├── packages/
│ └── types/ # Shared TypeScript types
├── Dockerfile # Docker configuration for backend
├── turbo.json # Turborepo configuration
└── package.json # Root package configuration

text


## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Forms**: React Hook Form + Zod validation
- **Table**: TanStack Table
- **Routing**: React Router v6
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript
- **Database**: MySQL (Railway)
- **ORM**: Prisma 6
- **Authentication**: JWT with bcrypt
- **File Storage**: Google Cloud Storage
- **Validation**: Zod
- **Deployment**: Google Cloud Run

### DevOps & Tools
- **Monorepo**: Turborepo
- **Containerization**: Docker
- **CI/CD**: Google Cloud Build
- **Package Manager**: npm workspaces

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 10.5.0+
- MySQL database
- Google Cloud Storage bucket (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movies-tvshows-app
Install dependencies

Bash

npm install
Set up environment variables

Create .env file in apps/backend/:

env

DATABASE_URL="mysql://username:password@host:port/database"
JWT_SECRET="your-secret-key"
PORT=5000
NODE_ENV=development
GCS_BUCKET_NAME="your-bucket-name"
GCP_PROJECT_ID="your-project-id"
Create .env.local file in apps/frontend/:

env

VITE_API_URL=http://localhost:5000/api
Set up the database

Bash

cd apps/backend
npm run prisma -- migrate deploy
Run the development servers

Bash

# From root directory
npm run dev
This will start:

Backend at http://localhost:5000
Frontend at http://localhost:5173
📝 API Documentation
Authentication Endpoints
POST /api/auth/register - User registration
POST /api/auth/login - User login
POST /api/auth/logout - User logout
GET /api/auth/me - Get current user
Movie Endpoints
GET /api/movies - Get all movies (with pagination & search)
POST /api/movies - Create new movie (requires auth)
GET /api/movies/:id - Get movie by ID
PUT /api/movies/:id - Update movie (requires auth)
DELETE /api/movies/:id - Delete movie (requires auth)
Health Check
GET /api/health - Server health status
🐳 Docker Deployment
Build the Docker image
Bash

docker build -t movies-app .
Run locally with Docker
Bash

docker run -p 8080:8080 \
  -e DATABASE_URL="your-database-url" \
  -e JWT_SECRET="your-secret" \
  -e GCS_BUCKET_NAME="your-bucket" \
  -e GCP_PROJECT_ID="your-project-id" \
  movies-app
☁️ Cloud Deployment
Google Cloud Run (Backend)
Build and push to Artifact Registry

Bash

gcloud builds submit --tag gcr.io/movies-tvshows-app/backend-service
Deploy to Cloud Run

Bash

gcloud run deploy backend-service \
  --image gcr.io/movies-tvshows-app/backend-service \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars NODE_ENV=production,GCP_PROJECT_ID=movies-tvshows-app,GCS_BUCKET_NAME=movies-tvshows-app-posters,DATABASE_URL="your-database-url",JWT_SECRET="your-secret"
Vercel (Frontend)
Connect your GitHub repository to Vercel
Set the environment variable:
VITE_API_URL: Your Cloud Run backend URL
📁 Project Structure Details
text

apps/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Express middleware
│   │   ├── routes/          # API routes
│   │   ├── utils/           # Utility functions
│   │   ├── validators/      # Zod schemas
│   │   └── app.ts          # Express app setup
│   └── prisma/
│       └── schema.prisma    # Database schema
│
└── frontend/
    └── src/
        ├── components/       # React components
        ├── context/         # Context providers
        ├── pages/           # Page components
        └── services/        # API service layer
🧪 Scripts
Root Level
npm run dev - Start all apps in development mode
npm run build - Build all apps
npm run lint - Lint all apps
npm run format - Format code with Prettier
Backend Specific
npm run dev - Start backend in development
npm run build - Build backend for production
npm run start - Start production server
npm run prisma - Run Prisma CLI commands
Frontend Specific
npm run dev - Start frontend development server
npm run build - Build for production
npm run preview - Preview production build
🔧 Troubleshooting
Common Issues and Solutions
Database Connection Issues

Verify DATABASE_URL is correct
Ensure database server is accessible
Check if migrations are up to date
Image Upload Issues

Verify GCS credentials are configured
Check bucket permissions
Ensure bucket name and project ID are correct
CORS Issues

Verify frontend URL is whitelisted in backend
Check credentials are included in requests
📄 License
This project was created as part of a technical assessment.

👤 Author
Your Name

Note: This project demonstrates proficiency in full-stack development, cloud deployment, and modern web technologies.
