<p align="center"> Made with ❤️ using Next.js and Tailwind CSS </p> ```
Backend README.md (Clean Version)
Markdown

# 🚀 EventSphere Backend API

<p align="center">
  <strong>Scalable event management API built with NestJS</strong>
</p>

<p align="center">
  <a href="https://eventsphere-backend-672628563199.asia-south1.run.app">Live API</a> •
  <a href="#installation">Quick Start</a> •
  <a href="#api-endpoints">API Docs</a> •
  <a href="#deployment">Deploy</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-10.0-E0234E?logo=nestjs" alt="NestJS">
  <img src="https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql" alt="PostgreSQL">
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
- [WebSocket Events](#websocket-events)
- [Payment Integration](#payment-integration)
- [Docker](#docker)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)

---

## ✨ Features

- 🔐 **JWT Authentication** - Secure auth with JWT & Google OAuth2
- 💳 **Stripe Payments** - Complete payment flow with webhooks
- 🔌 **Real-time WebSockets** - Socket.IO for live chat
- 🗄️ **PostgreSQL + Prisma** - Type-safe database access
- 🐳 **Docker Ready** - Containerized deployment
- ☁️ **Cloud Native** - Deployed on Google Cloud Run

---

## 🛠 Tech Stack

### Core Framework
- **NestJS 10.0+** - Progressive Node.js framework
- **TypeScript 5.1+** - Type safety
- **PostgreSQL 15+** - Relational database
- **Prisma 5.14+** - Type-safe ORM

### Authentication & Security
- **Passport.js** - Authentication middleware
- **JWT** - Token management
- **Bcrypt** - Password hashing
- **Google OAuth2** - Social login

### External Services
- **Stripe** - Payment processing
- **Socket.IO** - Real-time communication
- **Supabase** - Managed PostgreSQL

---

## 🚀 Installation

### Prerequisites
- Node.js 18.0 or later
- PostgreSQL 13+ or Supabase account
- npm or yarn
- Docker (optional)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/eventsphere-backend.git
cd eventsphere-backend
Install dependencies
Bash

npm install
Set up environment variables
Bash

cp .env.example .env
Configure environment variables
env

DATABASE_URL="postgresql://user:password@localhost:5432/eventsphere"
JWT_SECRET="your-secret-key"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
FRONTEND_URL="http://localhost:3001"
BACKEND_URL="http://localhost:3000"
Set up database
Bash

npx prisma migrate dev
npx prisma generate
Run development server
Bash

npm run start:dev
Access API
API available at http://localhost:3000
📁 Project Structure
text

eventsphere-backend/
├── src/
│   ├── auth/                  # Authentication module
│   │   ├── decorator/         # Custom decorators
│   │   ├── dto/              # Data transfer objects
│   │   ├── guard/            # Auth guards
│   │   └── strategy/         # Passport strategies
│   ├── chat/                 # WebSocket chat module
│   │   ├── chat.gateway.ts   # Socket.IO gateway
│   │   └── chat.module.ts
│   ├── events/               # Events module
│   │   ├── dto/              # Event DTOs
│   │   ├── events.controller.ts
│   │   ├── events.service.ts
│   │   └── events.module.ts
│   ├── payments/             # Stripe payments module
│   │   ├── payments.controller.ts
│   │   ├── payments.service.ts
│   │   └── payments.module.ts
│   ├── prisma/               # Prisma service
│   │   ├── prisma.service.ts
│   │   └── prisma.module.ts
│   ├── registrations/        # Event registration module
│   │   ├── registrations.service.ts
│   │   └── registrations.module.ts
│   ├── users/                # Users module
│   │   ├── users.controller.ts
│   │   └── users.module.ts
│   ├── app.module.ts         # Root module
│   └── main.ts               # Entry point
├── prisma/
│   ├── migrations/           # Database migrations
│   └── schema.prisma         # Database schema
├── .env                      # Environment variables
├── Dockerfile                # Docker configuration
├── docker-compose.yml        # Docker compose config
├── env.yml                   # Cloud Run env config
└── package.json              # Dependencies
🗄️ Database Setup
Prisma Schema
prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String         @id @default(cuid())
  email         String         @unique
  password      String
  firstName     String?
  lastName      String?
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
  events        Event[]
  registrations Registration[]
}

model Event {
  id            String         @id @default(cuid())
  title         String
  description   String
  location      String
  date          DateTime
  price         Float          @default(0)
  capacity      Int
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
  hostId        String
  host          User           @relation(fields: [hostId], references: [id])
  registrations Registration[]
}

model Registration {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  eventId   String
  event     Event    @relation(fields: [eventId], references: [id])

  @@unique([userId, eventId])
}
Database Commands
Bash

# Create migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate

# Open Prisma Studio
npx prisma studio
📚 API Endpoints
Base URL
Production: https://eventsphere-backend-672628563199.asia-south1.run.app
Development: http://localhost:3000
Authentication Endpoints
Method	Endpoint	Description
POST	/auth/signup	Register new user
POST	/auth/signin	Login user
GET	/auth/google	Initiate Google OAuth
GET	/auth/google/callback	Google OAuth callback
User Endpoints
Method	Endpoint	Auth	Description
GET	/users/me	✅	Get current user
Event Endpoints
Method	Endpoint	Auth	Description
GET	/events	❌	Get all events
GET	/events/:id	Optional	Get event details
POST	/events	✅	Create new event
PATCH	/events/:id	✅	Update event
DELETE	/events/:id	✅	Delete event
POST	/events/:id/register	✅	Register for event
Payment Endpoints
Method	Endpoint	Auth	Description
POST	/payments/checkout-session/:eventId	✅	Create checkout session
POST	/payments/webhook	Stripe	Handle webhooks
🔐 Authentication
JWT Authentication
TypeScript

// Protected endpoint example
@UseGuards(JwtGuard)
@Post('events')
async createEvent(@GetUser() user: User) {
  // Protected endpoint logic
}
Request Headers
http

Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
🔌 WebSocket Events
Connection
JavaScript

const socket = io('https://your-api.com', {
  auth: { token: 'jwt-token' }
});
Events
Event	Direction	Payload	Description
joinRoom	Client→Server	{ eventId }	Join event chat
sendMessage	Client→Server	{ eventId, message }	Send message
newMessage	Server→Client	{ user, message, timestamp }	Receive message
error	Server→Client	{ message }	Error notification
💳 Payment Integration
Stripe Setup
Development
Bash

stripe listen --forward-to localhost:3000/payments/webhook
Production
Add webhook endpoint in Stripe Dashboard
Set endpoint URL: https://your-api.com/payments/webhook
Select events: checkout.session.completed
🐳 Docker
Build Image
Bash

docker build -t eventsphere-backend .
Run Container
Bash

docker run -p 3000:3000 --env-file .env eventsphere-backend
Docker Compose
Bash

docker-compose up
Dockerfile
Dockerfile

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN npx prisma generate
EXPOSE 3000
CMD ["node", "dist/main"]
☁️ Deployment
Google Cloud Run
Build and push image
Bash

# Configure Docker
gcloud auth configure-docker asia-south1-docker.pkg.dev

# Build image
docker build -t asia-south1-docker.pkg.dev/PROJECT_ID/REPO/eventsphere-backend .

# Push image
docker push asia-south1-docker.pkg.dev/PROJECT_ID/REPO/eventsphere-backend
Deploy
Bash

gcloud run deploy eventsphere-backend \
  --image asia-south1-docker.pkg.dev/PROJECT_ID/REPO/eventsphere-backend \
  --region asia-south1 \
  --allow-unauthenticated \
  --env-vars-file env.yml
🧪 Testing
Run Tests
Bash

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
API Testing
http

### Sign Up
POST http://localhost:3000/auth/signup
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
🤝 Contributing
Fork the repository
Create feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open Pull Request
📄 License
This project is licensed under the MIT License.

<p align="center"> Built with ❤️ using NestJS </p> ```
