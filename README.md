🚀 EventSphere Backend API
<p align="center"> <strong>Scalable event management API built with NestJS</strong> </p><p align="center"> <a href="https://eventsphere-backend-672628563199.asia-south1.run.app">Live API</a> • <a href="#installation">Quick Start</a> • <a href="#api-endpoints">API Docs</a> • <a href="#deployment">Deploy</a> </p><p align="center"> <img src="https://img.shields.io/badge/NestJS-10.0-E0234E?logo=nestjs" alt="NestJS"> <img src="https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript" alt="TypeScript"> <img src="https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql" alt="PostgreSQL"> <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker" alt="Docker"> </p>
📋 Table of Contents
Features
Tech Stack
Installation
Project Structure
Database Setup
API Endpoints
Authentication
WebSocket Events
Payment Integration
Docker
Deployment
Testing
Monitoring & Logging
Contributing
License
Acknowledgments
✨ Features
🔐 JWT Authentication - Secure auth with JWT & Google OAuth2
💳 Stripe Payments - Complete payment flow with webhooks
🔌 Real-time WebSockets - Socket.IO for live chat
🗄️ PostgreSQL + Prisma - Type-safe database access
🐳 Docker Ready - Containerized deployment
☁️ Cloud Native - Deployed on Google Cloud Run
📝 Input Validation - DTOs with class-validator
🔄 CORS Enabled - Cross-origin resource sharing
📊 Scalable Architecture - Modular design pattern
🛠 Tech Stack
Core Framework
NestJS 10.0+ - Progressive Node.js framework
TypeScript 5.1+ - Type safety
PostgreSQL 15+ - Relational database
Prisma 5.14+ - Type-safe ORM
Authentication & Security
Passport.js - Authentication middleware
JWT - Token management
Bcrypt - Password hashing
Google OAuth2 - Social login
External Services
Stripe - Payment processing
Socket.IO - Real-time communication
Supabase - Managed PostgreSQL
🚀 Installation
Prerequisites
Node.js 18.0 or later
PostgreSQL 13+ or Supabase account
npm or yarn
Docker (optional)
Stripe CLI (for webhook testing)
Setup Steps
Clone the repository
Bash

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

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/eventsphere"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-min-32-characters"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Google OAuth
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"

# URLs
FRONTEND_URL="http://localhost:3001"
BACKEND_URL="http://localhost:3000"
Set up database
Bash

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database (optional)
npm run seed
Run development server
Bash

npm run start:dev
Test Stripe webhooks (separate terminal)
Bash

stripe listen --forward-to localhost:3000/payments/webhook
Access API
API available at http://localhost:3000
📁 Project Structure
text

eventsphere-backend/
├── src/
│   ├── auth/                  # Authentication module
│   │   ├── decorator/         # Custom decorators
│   │   │   └── get-user.decorator.ts
│   │   ├── dto/              # Data transfer objects
│   │   │   ├── signin.dto.ts
│   │   │   └── signup.dto.ts
│   │   ├── guard/            # Auth guards
│   │   │   ├── jwt.guard.ts
│   │   │   └── optional-jwt.guard.ts
│   │   ├── strategy/         # Passport strategies
│   │   │   ├── google.strategy.ts
│   │   │   └── jwt.strategy.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── chat/                 # WebSocket chat module
│   │   ├── chat.gateway.ts   # Socket.IO gateway
│   │   └── chat.module.ts
│   ├── events/               # Events module
│   │   ├── dto/              # Event DTOs
│   │   │   ├── create-event.dto.ts
│   │   │   └── update-event.dto.ts
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
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── app.module.ts         # Root module
│   └── main.ts               # Entry point
├── prisma/
│   ├── migrations/           # Database migrations
│   │   └── ...
│   └── schema.prisma         # Database schema
├── test/                     # Test files
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .dockerignore             # Docker ignore
├── .env                      # Environment variables
├── .env.example              # Environment template
├── .gitignore                # Git ignore
├── Dockerfile                # Docker configuration
├── docker-compose.yml        # Docker compose config
├── env.yml                   # Cloud Run env config
├── nest-cli.json             # NestJS CLI config
├── package.json              # Dependencies
├── tsconfig.build.json       # TypeScript build config
└── tsconfig.json             # TypeScript config
🗄️ Database Setup
Prisma Schema
prisma

// prisma/schema.prisma
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

# Apply migrations (production)
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Database seeding
npx prisma db seed
📚 API Endpoints
Base URL
Production: https://eventsphere-backend-672628563199.asia-south1.run.app
Development: http://localhost:3000
Authentication Endpoints
Method	Endpoint	Description	Request Body
POST	/auth/signup	Register new user	{ email, password, firstName?, lastName? }
POST	/auth/signin	Login user	{ email, password }
GET	/auth/google	Initiate Google OAuth	-
GET	/auth/google/callback	Google OAuth callback	-
Example Request - Sign Up
http

POST /auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "firstName": "John",
  "lastName": "Doe"
}
Example Response
JSON

{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "clxxx...",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
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
Example Request - Create Event
http

POST /events
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json

{
  "title": "Tech Conference 2024",
  "description": "Annual technology conference",
  "location": "San Francisco, CA",
  "date": "2024-09-15T09:00:00Z",
  "price": 99.99,
  "capacity": 500
}
Payment Endpoints
Method	Endpoint	Auth	Description
POST	/payments/checkout-session/:eventId	✅	Create Stripe checkout session
POST	/payments/webhook	Stripe Signature	Handle Stripe webhooks
🔐 Authentication
JWT Strategy Implementation
TypeScript

// auth/strategy/jwt.strategy.ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
Using Auth Guards
TypeScript

// Protected endpoint example
@UseGuards(JwtGuard)
@Post('events')
async createEvent(
  @GetUser() user: User,
  @Body() dto: CreateEventDto
) {
  return this.eventsService.create(user.id, dto);
}

// Optional auth endpoint
@UseGuards(OptionalJwtGuard)
@Get('events/:id')
async getEvent(
  @Param('id') id: string,
  @GetUser() user?: User
) {
  return this.eventsService.findOne(id, user?.id);
}
Request Headers
http

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
🔌 WebSocket Events
Socket.IO Gateway Configuration
TypeScript

// chat/chat.gateway.ts
@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(client: Socket, payload: { eventId: string }) {
    // Implementation
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(client: Socket, payload: { eventId: string; message: string }) {
    // Implementation
  }
}
Client Connection
JavaScript

const socket = io('https://your-api.com', {
  auth: { token: 'jwt-token' }
});

socket.emit('joinRoom', { eventId: 'event-id' });
socket.on('newMessage', (data) => {
  console.log('New message:', data);
});
Events Reference
Event	Direction	Payload	Description
connection	Server	-	Client connected
disconnect	Server	-	Client disconnected
joinRoom	Client→Server	{ eventId }	Join event chat
sendMessage	Client→Server	{ eventId, message }	Send message
newMessage	Server→Client	{ user, message, timestamp }	Broadcast message
error	Server→Client	{ message }	Error occurred
💳 Payment Integration
Stripe Configuration
Install Stripe CLI
Bash

# macOS
brew install stripe/stripe-cli/stripe

# Windows
scoop install stripe

# Linux
# Download from https://stripe.com/docs/stripe-cli
Development Setup
Bash

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/payments/webhook

# Note the webhook signing secret (whsec_...)
Production Setup
Go to Stripe Dashboard → Webhooks
Add endpoint: https://your-api.com/payments/webhook
Select events: checkout.session.completed
Copy signing secret to env variables
Payment Flow
mermaid

sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Stripe
    
    User->>Frontend: Click "Register for Event"
    Frontend->>Backend: POST /payments/checkout-session/:eventId
    Backend->>Stripe: Create checkout session
    Stripe-->>Backend: Return session URL
    Backend-->>Frontend: Return checkout URL
    Frontend->>User: Redirect to Stripe Checkout
    User->>Stripe: Complete payment
    Stripe->>Backend: Send webhook event
    Backend->>Backend: Verify webhook signature
    Backend->>Backend: Create registration
    Stripe->>Frontend: Redirect to success page
🐳 Docker
Dockerfile
Dockerfile

# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN npx prisma generate
EXPOSE 3000
CMD ["node", "dist/main"]
Docker Commands
Bash

# Build image
docker build -t eventsphere-backend .

# Run container
docker run -p 3000:3000 --env-file .env eventsphere-backend

# Run with Docker Compose
docker-compose up

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
docker-compose.yml
YAML

version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - postgres
  
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: eventsphere
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
☁️ Deployment
Google Cloud Run Deployment
Install Google Cloud SDK
Bash

# Download and install from https://cloud.google.com/sdk
gcloud init
Configure Docker for Artifact Registry
Bash

gcloud auth configure-docker asia-south1-docker.pkg.dev
Build and Push Image
Bash

# Set project variables
PROJECT_ID="your-project-id"
REGION="asia-south1"
REPO_NAME="eventsphere"
IMAGE_NAME="eventsphere-backend"

# Create Artifact Registry repository
gcloud artifacts repositories create $REPO_NAME \
  --repository-format=docker \
  --location=$REGION

# Build image
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME .

# Push image
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME
Deploy to Cloud Run
Bash

gcloud run deploy eventsphere-backend \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000 \
  --env-vars-file env.yml \
  --min-instances 0 \
  --max-instances 100
Environment Configuration (env.yml)
YAML

DATABASE_URL: "postgresql://user:password@host/database?schema=public"
JWT_SECRET: "your-super-secret-jwt-key"
STRIPE_SECRET_KEY: "sk_test_..."
STRIPE_WEBHOOK_SECRET: "whsec_..."
GOOGLE_CLIENT_ID: "xxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET: "GOCSPX-..."
FRONTEND_URL: "https://eventsphere-frontend.vercel.app"
BACKEND_URL: "https://eventsphere-backend-xxx.run.app"
🧪 Testing
Test Structure
text

test/
├── unit/              # Unit tests
│   ├── auth/
│   ├── events/
│   └── payments/
├── integration/       # Integration tests
└── e2e/              # End-to-end tests
    └── app.e2e-spec.ts
Running Tests
Bash

# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Specific test file
npm run test auth.service.spec.ts
Example Test
TypeScript

// events.service.spec.ts
describe('EventsService', () => {
  let service: EventsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsService, PrismaService],
    }).compile();

    service = module.get<EventsService>(EventsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create an event', async () => {
    const mockEvent = { id: '1', title: 'Test Event' };
    jest.spyOn(prisma.event, 'create').mockResolvedValue(mockEvent);

    const result = await service.create('userId', createEventDto);
    expect(result).toEqual(mockEvent);
  });
});
API Testing with Thunder Client
Import collection or create requests:

http

### Health Check
GET http://localhost:3000

### Sign Up
POST http://localhost:3000/auth/signup
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "Test123!@#",
  "firstName": "Test",
  "lastName": "User"
}

### Sign In
POST http://localhost:3000/auth/signin
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "Test123!@#"
}

### Create Event (Authenticated)
POST http://localhost:3000/events
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "title": "Sample Event",
  "description": "This is a sample event",
  "location": "Online",
  "date": "2024-12-25T10:00:00Z",
  "price": 0,
  "capacity": 100
}
🚦 Monitoring & Logging
Application Monitoring
TypeScript

// main.ts
import { Logger } from '@nestjs/common';

const logger = new Logger('Bootstrap');
logger.log(`Application running on: ${await app.getUrl()}`);
Google Cloud Logging
Bash

# View logs
gcloud run services logs read eventsphere-backend --limit=50

# Stream logs
gcloud run services logs tail eventsphere-backend
🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository

Create feature branch

Bash

git checkout -b feature/amazing-feature
Make changes and test
Bash

npm run test
npm run lint
Commit changes
Bash

git commit -m 'feat: add amazing feature'
Push to branch
Bash

git push origin feature/amazing-feature
Open Pull Request
Commit Convention
feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Code restructuring
test: Tests
chore: Maintenance
Code Style
Follow NestJS best practices
Use DTOs for validation
Keep controllers thin
Business logic in services
Write unit tests
Document complex logic
📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
NestJS team for the excellent framework
Prisma team for the powerful ORM
Google Cloud team for Cloud Run
Stripe team for payment infrastructure
All contributors and supporters
<p align="center"> Built with ❤️ using NestJS <br><br> <a href="https://github.com/yourusername/eventsphere-backend/issues">Report Bug</a> · <a href="https://github.com/yourusername/eventsphere-backend/issues">Request Feature</a> · <a href="https://github.com/yourusername/eventsphere-backend/discussions">Discussions</a> </p>
