Frontend README.md (Clean Version)
Markdown

# 🎉 EventSphere Frontend

<p align="center">
  <strong>A modern event management platform built with Next.js</strong>
</p>

<p align="center">
  <a href="https://eventsphere-frontend.vercel.app">Live Demo</a> •
  <a href="#installation">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#api-endpoints">API Docs</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel" alt="Vercel">
</p>

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Components](#components)
- [State Management](#state-management)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based auth with Google OAuth support
- 📅 **Event Management** - Create, browse, and manage events seamlessly
- 💳 **Stripe Payments** - Secure payment processing for paid events
- 💬 **Real-time Chat** - Live chat rooms for event attendees
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Optimized Performance** - Server-side rendering with Next.js App Router

---

## 🛠 Tech Stack

### Core Technologies
- **Next.js 14.2.3** - React framework with App Router
- **React 18+** - UI library
- **TypeScript 5.0+** - Type safety
- **Tailwind CSS 3.4.1** - Utility-first CSS

### State Management & Data Fetching
- **Zustand** - Client state management
- **TanStack Query** - Server state management
- **Axios** - HTTP client

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Real-time & UI
- **Socket.io Client** - WebSocket connection
- **React Hot Toast** - Toast notifications

---

## 🚀 Installation

### Prerequisites
- Node.js 18.17 or later
- npm or yarn or pnpm
- Git

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/eventsphere-frontend.git
cd eventsphere-frontend
Install dependencies
Bash

npm install
Set up environment variables
Bash

cp .env.example .env.local
Configure environment variables
env

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
Run the development server
Bash

npm run dev
Open browser
Navigate to http://localhost:3001
📁 Project Structure
text

eventsphere-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/               # Authentication pages
│   │   ├── events/             # Event pages
│   │   ├── payment/            # Payment flow pages
│   │   ├── signin/             # Sign in page
│   │   ├── signup/             # Sign up page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components
│   │   ├── auth/               # Auth components
│   │   ├── chat/               # Chat components
│   │   ├── events/             # Event components
│   │   ├── providers/          # Context providers
│   │   ├── Navbar.tsx          # Navigation
│   │   └── SocketInitializer.tsx
│   ├── lib/                    # Utilities
│   │   └── api/                # API configuration
│   ├── stores/                 # Zustand stores
│   │   ├── authStore.ts        # Auth state
│   │   └── socketStore.ts      # Socket state
│   └── types/                  # TypeScript types
├── public/                     # Static files
├── .env.local                  # Environment variables
├── next.config.mjs             # Next.js config
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind config
└── tsconfig.json               # TypeScript config
🔧 Environment Variables
Create .env.local file in root directory:

env

# Backend API URL
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com

# Add more environment variables as needed
📜 Available Scripts
Bash

# Development
npm run dev          # Start development server on port 3001

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
🔌 API Integration
Axios Configuration
Located in lib/api/axios.ts:

TypeScript

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
Example API Calls
TypeScript

// Fetch all events
const { data } = await api.get('/events');

// Create new event
const response = await api.post('/events', eventData);

// Register for event
await api.post(`/events/${eventId}/register`);
🎨 Components
Core Components
Component	Description	Location
Navbar	Main navigation with auth status	components/Navbar.tsx
SignInForm	User authentication form	components/auth/SignInForm.tsx
SignUpForm	User registration form	components/auth/SignUpForm.tsx
CreateEventForm	Event creation form	components/events/CreateEventForm.tsx
ChatRoom	Real-time chat interface	components/chat/ChatRoom.tsx
QueryProvider	TanStack Query provider	components/providers/QueryProvider.tsx
SocketInitializer	WebSocket connection manager	components/SocketInitializer.tsx
💾 State Management
Zustand Store (authStore.ts)
TypeScript

interface AuthState {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}
TanStack Query Usage
TypeScript

// Example query
const { data, isLoading } = useQuery({
  queryKey: ['events'],
  queryFn: () => api.get('/events'),
});

// Example mutation
const mutation = useMutation({
  mutationFn: (data) => api.post('/events', data),
  onSuccess: () => {
    queryClient.invalidateQueries(['events']);
  },
});
🚀 Deployment
Deploy to Vercel
Option 1: Vercel CLI
Bash

npm i -g vercel
vercel
Option 2: Git Integration
Push code to GitHub
Import project on Vercel Dashboard
Configure environment variables
Deploy automatically on push
Build Configuration
JavaScript

// next.config.mjs
const nextConfig = {
  // Your custom configuration
};

export default nextConfig;
🤝 Contributing
Fork the repository
Create feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open Pull Request
📄 License
This project is licensed under the MIT License.
