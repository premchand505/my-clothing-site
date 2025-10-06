<div align="center">
🌟 Star this repo if you find it helpful!
Made with ❤️ using Next.js and Tailwind CSS

Report Bug · Request Feature

</div> ```
Backend README.md
Markdown

<div align="center">
  
  # 🚀 EventSphere Backend API
  
  <p align="center">
    <strong>Scalable event management API built with NestJS</strong>
  </p>

  <p align="center">
    <a href="https://eventsphere-backend-672628563199.asia-south1.run.app">
      <img src="https://img.shields.io/badge/API-live-brightgreen?style=for-the-badge" alt="Live API">
    </a>
    <a href="#-quick-start">
      <img src="https://img.shields.io/badge/quick-start-blue?style=for-the-badge" alt="Quick Start">
    </a>
    <a href="#-api-documentation">
      <img src="https://img.shields.io/badge/API_Docs-orange?style=for-the-badge" alt="API Docs">
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/NestJS-10.0-E0234E?style=flat-square&logo=nestjs" alt="NestJS">
    <img src="https://img.shields.io/badge/TypeScript-5.1-blue?style=flat-square&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql" alt="PostgreSQL">
    <img src="https://img.shields.io/badge/Prisma-5.14-2D3748?style=flat-square&logo=prisma" alt="Prisma">
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Deployed_on-Google_Cloud_Run-4285F4?style=flat-square&logo=google-cloud" alt="Google Cloud">
    <img src="https://img.shields.io/badge/Container-Docker-2496ED?style=flat-square&logo=docker" alt="Docker">
    <img src="https://img.shields.io/badge/Status-Production-success?style=flat-square" alt="Status">
  </p>

  ---

  <p align="center">
    <img src="https://via.placeholder.com/800x400/e0234e/fff?text=EventSphere+API+Architecture" alt="API Architecture">
  </p>

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📚 API Documentation](#-api-documentation)
- [🗄️ Database Schema](#️-database-schema)
- [🔐 Authentication](#-authentication)
- [💳 Payment Integration](#-payment-integration)
- [🔌 WebSocket Events](#-websocket-events)
- [🐳 Docker](#-docker)
- [☁️ Deployment](#️-deployment)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)

## ✨ Features

<table>
  <tr>
    <td align="center">🔐</td>
    <td><strong>JWT Authentication</strong><br/>Secure authentication with JWT & OAuth2 (Google)</td>
  </tr>
  <tr>
    <td align="center">💳</td>
    <td><strong>Stripe Integration</strong><br/>Complete payment flow with webhooks</td>
  </tr>
  <tr>
    <td align="center">🔌</td>
    <td><strong>Real-time WebSockets</strong><br/>Socket.IO for live chat functionality</td>
  </tr>
  <tr>
    <td align="center">🗄️</td>
    <td><strong>PostgreSQL + Prisma</strong><br/>Type-safe database access with migrations</td>
  </tr>
  <tr>
    <td align="center">🐳</td>
    <td><strong>Docker Ready</strong><br/>Containerized for easy deployment</td>
  </tr>
  <tr>
    <td align="center">☁️</td>
    <td><strong>Cloud Native</strong><br/>Deployed on Google Cloud Run</td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or later
- **PostgreSQL** 13+ or **Supabase** account
- **npm** or **yarn**
- **Docker** (optional)

### Installation

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
Update .env with your configuration:

env

DATABASE_URL="postgresql://user:password@localhost:5432/eventsphere"
JWT_SECRET="your-secret-key"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
FRONTEND_URL="http://localhost:3001"
BACKEND_URL="http://localhost:3000"
Set up the database

Bash

npx prisma migrate dev
npx prisma generate
Run the development server

Bash

npm run start:dev
Access the API

API will be available at http://localhost:3000

🛠️ Tech Stack
Core Framework
Technology	Purpose	Version
NestJS	Node.js Framework	10.0+
TypeScript	Type Safety	5.1+
PostgreSQL	Database	15+
Prisma	ORM	5.14+
Authentication & Security
Library	Purpose
Passport.js	Authentication
JWT	Token Management
Bcrypt	Password Hashing
Google OAuth2	Social Login
External Services
Service	Purpose
Stripe	Payment Processing
Socket.IO	Real-time Communication
Supabase	Managed Database
📁 Project Structure
text

src/
├── auth/                  # Authentication module
│   ├── decorator/        # Custom decorators
│   ├── dto/             # Data transfer objects
│   ├── guard/           # Auth guards
│   └── strategy/        # Passport strategies
├── chat/                 # WebSocket chat module
│   ├── chat.gateway.ts  # Socket.IO gateway
│   └── chat.module.ts   
├── events/               # Events module
│   ├── dto/             # Event DTOs
│   ├── events.controller.ts
│   ├── events.service.ts
│   └── events.module.ts
├── payments/             # Stripe payments module
│   ├── payments.controller.ts
│   ├── payments.service.ts
│   └── payments.module.ts
├── prisma/               # Prisma service
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── registrations/        # Event registration module
│   ├── registrations.service.ts
│   └── registrations.module.ts
├── users/                # Users module
│   ├── users.controller.ts
│   └── users.module.ts
├── app.module.ts         # Root module
└── main.ts              # Application entry point
🔧 Configuration
Environment Variables
env

# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# Authentication
JWT_SECRET="your-super-secret-jwt-key"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Google OAuth
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"

# URLs
FRONTEND_URL="https://your-frontend-url.com"
BACKEND_URL="https://your-backend-url.com"
Database Configuration
Using Prisma schema (prisma/schema.prisma):

prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
📚 API Documentation
Base URL
text

Production: https://eventsphere-backend-672628563199.asia-south1.run.app
Development: http://localhost:3000
Authentication Endpoints
Method	Endpoint	Description	Body
POST	/auth/signup	Register new user	{ email, password, firstName?, lastName? }
POST	/auth/signin	Login user	{ email, password }
GET	/auth/google	Initiate Google OAuth	-
GET	/auth/google/callback	Google OAuth callback	-
User Endpoints
Method	Endpoint	Auth	Description
GET	/users/me	✅	Get current user profile
Event Endpoints
Method	Endpoint	Auth	Description
GET	/events	❌	Get all events
GET	/events/:id	Optional	Get event details
POST	/events	✅	Create new event
PATCH	/events/:id	✅	Update event (host only)
DELETE	/events/:id	✅	Delete event (host only)
POST	/events/:id/register	✅	Register for free event
Payment Endpoints
Method	Endpoint	Auth	Description
POST	/payments/checkout-session/:eventId	✅	Create Stripe checkout session
POST	/payments/webhook	Stripe	Handle Stripe webhooks
Response Format
Success Response
JSON

{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
Error Response
JSON

{
  "statusCode": 400,
  "message": "Error message",
  "error": "Bad Request"
}
🗄️ Database Schema
ERD Diagram
mermaid

erDiagram
    User ||--o{ Event : hosts
    User ||--o{ Registration : has
    Event ||--o{ Registration : has
    
    User {
        string id PK
        string email UK
        string password
        string firstName
        string lastName
        datetime createdAt
        datetime updatedAt
    }
    
    Event {
        string id PK
        string title
        string description
        string location
        datetime date
        float price
        int capacity
        string hostId FK
        datetime createdAt
        datetime updatedAt
    }
    
    Registration {
        string id PK
        string userId FK
        string eventId FK
        datetime createdAt
    }
🔐 Authentication
JWT Strategy
TypeScript

// Request with JWT token
headers: {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...'
}
Protected Routes
Use the @UseGuards(JwtGuard) decorator:

TypeScript

@UseGuards(JwtGuard)
@Post('events')
async createEvent(@GetUser() user: User) {
  // Protected endpoint
}
💳 Payment Integration
Stripe Webhook Setup
Local Development

Bash

stripe listen --forward-to localhost:3000/payments/webhook
Production

Add webhook endpoint in Stripe Dashboard
Set endpoint URL: https://your-api.com/payments/webhook
Select events: checkout.session.completed
🔌 WebSocket Events
Connection
JavaScript

const socket = io('https://your-api.com', {
  auth: { token: 'jwt-token' }
});
Events
Event Name	Direction	Payload	Description
joinRoom	Client→Server	{ eventId }	Join event chat room
sendMessage	Client→Server	{ eventId, message }	Send chat message
newMessage	Server→Client	{ user, message, timestamp }	Receive chat message
error	Server→Client	{ message }	Error notification
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

# Configure Docker for GCP
gcloud auth configure-docker asia-south1-docker.pkg.dev

# Build image
docker build -t asia-south1-docker.pkg.dev/PROJECT_ID/REPO_NAME/eventsphere-backend .

# Push image
docker push asia-south1-docker.pkg.dev/PROJECT_ID/REPO_NAME/eventsphere-backend
Deploy to Cloud Run

Bash

gcloud run deploy eventsphere-backend \
  --image asia-south1-docker.pkg.dev/PROJECT_ID/REPO_NAME/eventsphere-backend \
  --region asia-south1 \
  --allow-unauthenticated \
  --env-vars-file env.yml
Environment Configuration (env.yml)
YAML

DATABASE_URL: "postgresql://..."
JWT_SECRET: "your-secret"
STRIPE_SECRET_KEY: "sk_test_..."
# ... other variables
🧪 Testing
Run Tests
Bash

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
API Testing with Thunder Client / Postman
Import the collection from thunder-collection.json or create requests:

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

### Sign In
POST http://localhost:3000/auth/signin
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository
Create a feature branch
Bash

git checkout -b feature/amazing-feature
Make your changes
Run tests
Bash

npm run test
Commit your changes
Bash

git commit -m 'Add amazing feature'
Push to the branch
Bash

git push origin feature/amazing-feature
Open a Pull Request
Development Guidelines
Follow NestJS best practices
Write unit tests for new features
Use DTOs for request validation
Keep controllers thin, logic in services
Document API changes
<div align="center">
🌟 Star this repo if you find it helpful!
Built with ❤️ using NestJS

Report Bug · Request Feature

</div> ```
