<div align="center">
  
  # 🎉 EventSphere Frontend
  
  <p align="center">
    <strong>A modern event management platform built with Next.js</strong>
  </p>

  <p align="center">
    <a href="https://eventsphere-frontend.vercel.app">
      <img src="https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge" alt="Live Demo">
    </a>
    <a href="#-quick-start">
      <img src="https://img.shields.io/badge/quick-start-blue?style=for-the-badge" alt="Quick Start">
    </a>
    <a href="#-features">
      <img src="https://img.shields.io/badge/features-orange?style=for-the-badge" alt="Features">
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" alt="React">
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel" alt="Vercel">
    <img src="https://img.shields.io/badge/Status-Production-success?style=flat-square" alt="Status">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="License">
  </p>

  ---

  <p align="center">
    <img src="https://via.placeholder.com/800x400/1a1a2e/fff?text=EventSphere+Screenshot" alt="EventSphere Screenshot">
  </p>

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📱 Pages & Routes](#-pages--routes)
- [🎨 Components](#-components)
- [🔌 API Integration](#-api-integration)
- [🏗️ Build & Deploy](#️-build--deploy)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

<table>
  <tr>
    <td align="center">🔐</td>
    <td><strong>Secure Authentication</strong><br/>JWT-based auth with Google OAuth support</td>
  </tr>
  <tr>
    <td align="center">📅</td>
    <td><strong>Event Management</strong><br/>Create, browse, and manage events seamlessly</td>
  </tr>
  <tr>
    <td align="center">💳</td>
    <td><strong>Stripe Payments</strong><br/>Secure payment processing for paid events</td>
  </tr>
  <tr>
    <td align="center">💬</td>
    <td><strong>Real-time Chat</strong><br/>Live chat rooms for event attendees</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Responsive Design</strong><br/>Mobile-first approach with Tailwind CSS</td>
  </tr>
  <tr>
    <td align="center">⚡</td>
    <td><strong>Optimized Performance</strong><br/>Server-side rendering with Next.js App Router</td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eventsphere-frontend.git
   cd eventsphere-frontend
Install dependencies

Bash

npm install
# or
yarn install
# or
pnpm install
Set up environment variables

Bash

cp .env.example .env.local
Update .env.local with your configuration:

env

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
Run the development server

Bash

npm run dev
# or
yarn dev
# or
pnpm dev
Open your browser

Navigate to http://localhost:3001

🛠️ Tech Stack
Core Technologies
Technology	Purpose	Version
Next.js	React Framework	14.2.3
React	UI Library	18+
TypeScript	Type Safety	5.0+
Tailwind CSS	Styling	3.4.1
State Management & Data Fetching
Library	Purpose
Zustand	Client State Management
TanStack Query	Server State Management
Axios	HTTP Client
Forms & Validation
Library	Purpose
React Hook Form	Form Management
Zod	Schema Validation
Real-time & UI
Library	Purpose
Socket.io Client	WebSocket Connection
React Hot Toast	Notifications
📁 Project Structure
text

src/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── events/            # Event pages
│   ├── payment/           # Payment flow pages
│   ├── signin/            # Sign in page
│   ├── signup/            # Sign up page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── auth/             # Auth components
│   ├── chat/             # Chat components
│   ├── events/           # Event components
│   ├── providers/        # Context providers
│   └── Navbar.tsx        # Navigation
├── lib/                   # Utilities
│   └── api/              # API configuration
├── stores/                # Zustand stores
│   ├── authStore.ts      # Authentication state
│   └── socketStore.ts    # WebSocket state
└── types/                 # TypeScript definitions
🔧 Configuration
Environment Variables
Create a .env.local file in the root directory:

env

# Backend API URL
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com

# Optional: Add more environment variables as needed
Next.js Configuration
The next.config.mjs file contains Next.js specific configurations:

JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your custom configuration
};

export default nextConfig;
📱 Pages & Routes
Route	Description	Authentication
/	Homepage with event listings	Public
/signin	User sign in	Public
/signup	User registration	Public
/events/[id]	Event details page	Public
/events/create	Create new event	Protected
/payment/success	Payment success page	Protected
/payment/cancel	Payment cancelled page	Protected
/auth/callback	OAuth callback	Public
🎨 Components
Key Components
<Navbar /> - Main navigation with auth status
<SignInForm /> - User authentication form
<SignUpForm /> - User registration form
<CreateEventForm /> - Event creation form
<ChatRoom /> - Real-time chat interface
<QueryProvider /> - TanStack Query provider
<SocketInitializer /> - WebSocket connection manager
🔌 API Integration
Axios Configuration
TypeScript

// lib/api/axios.ts
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
Example API Calls
TypeScript

// Fetch events
const { data } = await api.get('/events');

// Create event
const response = await api.post('/events', eventData);

// Register for event
await api.post(`/events/${eventId}/register`);
🏗️ Build & Deploy
Local Build
Bash

# Build for production
npm run build

# Start production server
npm run start
Deploy to Vercel
Option 1: Vercel CLI
Bash

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
Option 2: Git Integration
Push your code to GitHub
Import project on Vercel Dashboard
Configure environment variables
Deploy automatically on push
Build Output
text

Route (app)                              Size     First Load JS
┌ ○ /                                    5.23 kB        87.2 kB
├ ○ /auth/callback                       3.45 kB        78.4 kB
├ ○ /events/[id]                         8.76 kB        93.5 kB
├ ○ /events/create                       4.12 kB        81.3 kB
└ ○ /signin                              6.89 kB        85.7 kB
🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository
Create a feature branch
Bash

git checkout -b feature/amazing-feature
Commit your changes
Bash

git commit -m 'Add amazing feature'
Push to the branch
Bash

git push origin feature/amazing-feature
Open a Pull Request
Development Guidelines
Follow the existing code style
Write meaningful commit messages
Add tests for new features
Update documentation as needed
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
