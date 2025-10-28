# BACKEND README.md

Copy everything below and save as `apps/backend/README.md`:

---

```markdown
# 🎬 Movies & TV Shows Backend API

<p align="center">
  <strong>RESTful API for movie and TV show management</strong>
</p>

<p align="center">
  <a href="https://backend-service-659948353959.us-central1.run.app/api/health">Live API</a> •
  <a href="#installation">Quick Start</a> •
  <a href="#api-endpoints">API Docs</a> •
  <a href="#deployment">Deploy</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Express-5.1-000000?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Prisma-6.18-2D3748?logo=prisma" alt="Prisma">
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql" alt="MySQL">
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker" alt="Docker">
</p>

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [File Upload](#file-upload)
- [Docker](#docker)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)

---

## ✨ Features

- 🔐 **JWT Authentication** - Secure auth with httpOnly cookies
- 📁 **File Upload** - Google Cloud Storage integration
- 🗄️ **MySQL + Prisma** - Type-safe database access
- 🔍 **Full-Text Search** - Search movies by title, director, year
- 📄 **Pagination** - Efficient data loading
- 🐳 **Docker Ready** - Containerized deployment
- ☁️ **Cloud Native** - Deployed on Google Cloud Run
- ✅ **Input Validation** - Zod schema validation
- 🔄 **CORS Enabled** - Cross-origin resource sharing
- 📊 **Scalable Architecture** - Modular controller/service pattern

---

## 🛠 Tech Stack

### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| Express.js | 5.1 | Web framework |
| TypeScript | 5.9 | Type safety |
| Prisma | 6.18 | ORM |
| MySQL | 8.0 | Database |

### Authentication & Security
| Technology | Version | Purpose |
|------------|---------|---------|
| jsonwebtoken | 9.0 | JWT tokens |
| bcryptjs | 3.0 | Password hashing |
| cookie-parser | 1.4 | Cookie parsing |
| cors | 2.8 | CORS middleware |

### File Storage
| Technology | Version | Purpose |
|------------|---------|---------|
| Multer | 2.0 | File upload middleware |
| @google-cloud/storage | 7.17 | GCS integration |

### Validation
| Technology | Version | Purpose |
|------------|---------|---------|
| Zod | 4.1 | Schema validation |

---

## 🚀 Installation

### Prerequisites

- Node.js 18.0 or later
- MySQL 8.0+ or Railway account
- Google Cloud account (for image storage)
- npm 10.5+

### Setup Steps

**1. Navigate to backend directory**

```bash
cd apps/backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

```bash
cp .env.example .env
```

Configure `.env`:
```env
# Database
DATABASE_URL="mysql://user:password@host:port/database"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-minimum-64-characters-long"

# Server
PORT=5000
NODE_ENV=development

# Google Cloud Storage
GCS_BUCKET_NAME="movies-tvshows-app-posters"
GCP_PROJECT_ID="your-gcp-project-id"
```

**4. Set up Google Cloud credentials**

```bash
# Download service account key from GCP Console
# Save as gcp-service-account.json

export GOOGLE_APPLICATION_CREDENTIALS="./gcp-service-account.json"
```

**5. Initialize database**

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Optionally seed database
npm run seed
```

**6. Start development server**

```bash
npm run dev
```

API will be available at `http://localhost:5000`

---

## 📁 Project Structure

**Backend Directory (`apps/backend/`):**

- `prisma/` - Database configuration
  - `migrations/` - Database migration files
  - `schema.prisma` - Prisma schema definition
  
- `src/` - Source code
  - `controllers/` - Route controllers
    - `authController.ts` - Authentication logic
    - `movieController.ts` - Movie CRUD operations
  - `middleware/` - Express middleware
    - `auth.ts` - JWT verification
    - `errorHandler.ts` - Global error handler
    - `upload.ts` - File upload to GCS
    - `validate.ts` - Schema validation
  - `routes/` - API routes
    - `authRoutes.ts` - Authentication routes
    - `movieRoutes.ts` - Movie routes
  - `utils/` - Utility functions
    - `prismaClient.ts` - Prisma client instance
  - `validators/` - Validation schemas
    - `schemas.ts` - Zod schemas
  - `app.ts` - Express application setup

- `.env` - Environment variables
- `.env.example` - Environment template
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript configuration

---

## 🗄️ Database Setup

### Prisma Schema

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
  name      String?
  movies    Movie[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Movie {
  id        Int      @id @default(autoincrement())
  title     String
  type      String   // "movie" or "tvshow"
  director  String
  budget    String?
  location  String?
  duration  String?
  year      String
  poster    String?  @db.VarChar(1024)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user      User     @relation(fields: [userId], references: [id])
  userId    Int
  
  @@fulltext([title, director, type, year])
}
```

### Database Commands

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations (production)
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate

# Reset database
npx prisma migrate reset

# Open Prisma Studio (database GUI)
npx prisma studio

# Format schema
npx prisma format
```

---

## 📚 API Endpoints

### Base URLs
- **Development:** `http://localhost:5000/api`
- **Production:** `https://backend-service-659948353959.us-central1.run.app/api`

### Authentication Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | ❌ | Register new user |
| POST | `/auth/login` | ❌ | Login user |
| POST | `/auth/logout` | ✅ | Logout user |
| GET | `/auth/me` | ✅ | Get current user |

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "name": "John Doe"
}
```

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Note:** Token is set as httpOnly cookie automatically.

#### Get Current User
```http
GET /api/auth/me
Cookie: token=eyJhbGciOiJIUzI1NiIs...
```

**Response (200):**
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

#### Logout
```http
POST /api/auth/logout
Cookie: token=eyJhbGciOiJIUzI1NiIs...
```

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

---

### Movie Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/movies` | ❌ | Get all movies (paginated) |
| GET | `/movies/:id` | ❌ | Get single movie |
| POST | `/movies` | ✅ | Create new movie |
| PUT | `/movies/:id` | ✅ | Update movie (owner only) |
| DELETE | `/movies/:id` | ✅ | Delete movie (owner only) |

#### Get All Movies
```http
GET /api/movies?page=1&limit=20&search=inception&type=movie
```

**Query Parameters:**
- `page` (number) - Page number (default: 1)
- `limit` (number) - Items per page (default: 20, max: 100)
- `search` (string) - Search query (searches title, director, year)
- `type` (string) - Filter by type ("movie" or "tvshow")

**Response (200):**
```json
{
  "movies": [
    {
      "id": 1,
      "title": "Inception",
      "type": "movie",
      "director": "Christopher Nolan",
      "year": "2010",
      "budget": "$160M",
      "duration": "148 min",
      "location": "USA",
      "poster": "https://storage.googleapis.com/bucket/poster.jpg",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "user": {
        "id": 1,
        "name": "John Doe"
      }
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 20,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### Get Single Movie
```http
GET /api/movies/1
```

**Response (200):**
```json
{
  "id": 1,
  "title": "Inception",
  "type": "movie",
  "director": "Christopher Nolan",
  "year": "2010",
  "budget": "$160M",
  "duration": "148 min",
  "location": "USA",
  "poster": "https://storage.googleapis.com/bucket/poster.jpg",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### Create Movie
```http
POST /api/movies
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Content-Type: multipart/form-data

title: "Inception"
type: "movie"
director: "Christopher Nolan"
year: "2010"
budget: "$160M"
duration: "148 min"
location: "USA"
poster: [binary file data]
```

**Response (201):**
```json
{
  "id": 1,
  "title": "Inception",
  "type": "movie",
  "director": "Christopher Nolan",
  "year": "2010",
  "budget": "$160M",
  "duration": "148 min",
  "location": "USA",
  "poster": "https://storage.googleapis.com/bucket/poster-123.jpg",
  "userId": 1,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

#### Update Movie
```http
PUT /api/movies/1
Cookie: token=eyJhbGciOiJIUzI1NiIs...
Content-Type: multipart/form-data

title: "Inception (Updated)"
budget: "$170M"
poster: [optional new file]
```

**Response (200):**
```json
{
  "id": 1,
  "title": "Inception (Updated)",
  "budget": "$170M",
  "updatedAt": "2024-01-02T00:00:00.000Z"
}
```

#### Delete Movie
```http
DELETE /api/movies/1
Cookie: token=eyJhbGciOiJIUzI1NiIs...
```

**Response (200):**
```json
{
  "message": "Movie deleted successfully"
}
```

---

### Health Check

```http
GET /api/health
```

**Response (200):**
```json
{
  "message": "Server is running!",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## 🔐 Authentication

### JWT Strategy

The API uses JWT tokens stored in httpOnly cookies for authentication.

**Token Generation:**
```typescript
import jwt from 'jsonwebtoken';

const token = jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);
```

**Setting Cookie:**
```typescript
res.cookie('token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});
```

### Auth Middleware

Protected routes use the `protect` middleware:

```typescript
// middleware/auth.ts
export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

**Usage:**
```typescript
router.post('/movies', protect, createMovie);
```

---

## 📁 File Upload

### Google Cloud Storage Integration

Files are uploaded directly to Google Cloud Storage using a custom middleware.

**Upload Middleware:**
```typescript
// middleware/upload.ts
import multer from 'multer';
import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID
});

const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

// Multer config for memory storage
export const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// Upload to GCS
export const uploadToGcs = async (req, res, next) => {
  if (!req.file) return next();
  
  const blob = bucket.file(`posters/${Date.now()}-${req.file.originalname}`);
  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: { contentType: req.file.mimetype }
  });
  
  blobStream.on('error', (err) => next(err));
  
  blobStream.on('finish', () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    req.file.path = publicUrl;
    next();
  });
  
  blobStream.end(req.file.buffer);
};
```

**Usage:**
```typescript
router.post(
  '/movies',
  protect,
  multerUpload.single('poster'),
  uploadToGcs,
  createMovie
);
```

### Supported Formats
- JPEG/JPG
- PNG
- GIF
- WebP

### File Size Limit
- Maximum: 5MB

---

## 🐳 Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy root dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy monorepo
COPY . .

# Build backend
RUN npx turbo run build --filter=backend

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy build artifacts
COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "dist/app.js"]
```

### Docker Commands

```bash
# Build image (from root directory)
docker build -t movies-backend .

# Run container
docker run -p 5000:5000 --env-file apps/backend/.env movies-backend

# Run with Docker Compose (from root)
docker-compose up
```

---

## ☁️ Deployment

### Google Cloud Run

**1. Set up Google Cloud**

```bash
# Set project
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

**2. Create Artifact Registry repository**

```bash
gcloud artifacts repositories create movies-tvshows-app \
  --repository-format=docker \
  --location=us-central1
```

**3. Build and push image**

```bash
# Configure Docker
gcloud auth configure-docker us-central1-docker.pkg.dev

# Build image
docker build -t us-central1-docker.pkg.dev/PROJECT_ID/movies-tvshows-app/backend .

# Push image
docker push us-central1-docker.pkg.dev/PROJECT_ID/movies-tvshows-app/backend
```

**4. Deploy to Cloud Run**

```bash
gcloud run deploy backend-service \
  --image us-central1-docker.pkg.dev/PROJECT_ID/movies-tvshows-app/backend \
  --region us-central1 \
  --allow-unauthenticated \
  --port 5000 \
  --set-env-vars DATABASE_URL="mysql://..." \
  --set-env-vars JWT_SECRET="..." \
  --set-env-vars GCS_BUCKET_NAME="..." \
  --set-env-vars GCP_PROJECT_ID="..." \
  --set-env-vars NODE_ENV="production" \
  --min-instances 0 \
  --max-instances 10 \
  --memory 512Mi \
  --cpu 1
```

**5. Run database migrations**

```bash
DATABASE_URL="your-production-url" npx prisma migrate deploy
```

### Railway (Database)

1. Create a new MySQL database on Railway
2. Copy the connection URL
3. Update `DATABASE_URL` in your environment variables
4. Run migrations

---

## 🔧 Environment Variables

### Required Variables

```env
# Database Configuration
DATABASE_URL="mysql://user:password@host:port/database"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-minimum-64-characters-recommended"

# Server Configuration
PORT=5000
NODE_ENV=development  # or "production"

# Google Cloud Storage
GCS_BUCKET_NAME="movies-tvshows-app-posters"
GCP_PROJECT_ID="your-gcp-project-id"

# Optional: Google Cloud credentials path
GOOGLE_APPLICATION_CREDENTIALS="./gcp-service-account.json"
```

### Example .env File

```env
DATABASE_URL="mysql://root:password@localhost:3306/movies_db"
JWT_SECRET="b10301bd5d2a652ce1b6e509dec47293472cc0fd76056607737c81a0e108844bc75e1e6950a4b5a15cf7bab3712433bcf7bdd466ab5b56dd1413249aed8fac9c"
PORT=5000
NODE_ENV=development
GCS_BUCKET_NAME="movies-tvshows-app-posters"
GCP_PROJECT_ID="movies-tvshows-app"
```

---

## 📊 Error Handling

All errors are handled by a global error handler:

```typescript
// middleware/errorHandler.ts
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Prisma errors
  if (err.code === 'P2002') {
    return res.status(400).json({ error: 'Duplicate entry' });
  }

  // Validation errors
  if (err.name === 'ZodError') {
    return res.status(400).json({ 
      error: 'Validation error',
      details: err.errors 
    });
  }

  // Default error
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
};
```

### Common Error Responses

```json
// 400 Bad Request
{
  "error": "Validation error",
  "details": [...]
}

// 401 Unauthorized
{
  "error": "Not authenticated"
}

// 403 Forbidden
{
  "error": "Not authorized to access this resource"
}

// 404 Not Found
{
  "error": "Resource not found"
}

// 500 Internal Server Error
{
  "error": "Internal server error"
}
```

---

## 🧪 Testing

### Manual Testing with curl

```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123","name":"Test User"}'

# Login user
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123"}' \
  -c cookies.txt

# Get current user
curl http://localhost:5000/api/auth/me -b cookies.txt

# Create movie
curl -X POST http://localhost:5000/api/movies \
  -b cookies.txt \
  -F "title=Inception" \
  -F "type=movie" \
  -F "director=Christopher Nolan" \
  -F "year=2010" \
  -F "poster=@/path/to/image.jpg"

# Get all movies
curl "http://localhost:5000/api/movies?page=1&limit=20"
```

---

## 🤝 Contributing

See the [main README](../../README.md) for contribution guidelines.

---

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

---

<p align="center">
  Made with ❤️ using Express & TypeScript
  <br><br>
  <a href="https://github.com/yourusername/movies-tvshows-app">Back to Main README</a>
</p>
```

---

**Copy everything above** and save it as `apps/backend/README.md`.

Reply with **"success"** or **"next"** when ready for the Frontend README!
