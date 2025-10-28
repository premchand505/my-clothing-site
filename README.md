# FRONTEND README.md

Copy everything below and save as `apps/frontend/README.md`:

---

```markdown
# 🎬 Movies & TV Shows Frontend

<p align="center">
  <strong>Modern React application for managing movies and TV shows</strong>
</p>

<p align="center">
  <a href="https://movies-tvshows-app.vercel.app">Live Demo</a> •
  <a href="#installation">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#components">Components</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/shadcn/ui-Latest-000000" alt="shadcn/ui">
</p>

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
- [Routing](#routing)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)

---

## ✨ Features

### 🎨 Modern UI/UX
- ✅ Responsive design for all screen sizes
- ✅ Dark mode support (via Tailwind)
- ✅ Beautiful animations with tailwindcss-animate
- ✅ Accessible components from shadcn/ui
- ✅ Toast notifications for user feedback

### 🔐 Authentication
- ✅ User registration with validation
- ✅ Secure login with JWT cookies
- ✅ Protected routes
- ✅ Persistent authentication state
- ✅ Auto-logout on token expiration

### 🎥 Movie Management
- ✅ Create, read, update, delete movies/TV shows
- ✅ Upload poster images
- ✅ Search functionality
- ✅ Filter by type (Movie/TV Show)
- ✅ Infinite scroll pagination
- ✅ Detailed movie information modal

### 📊 Data Display
- ✅ Interactive data table with TanStack Table
- ✅ Sortable columns
- ✅ Pagination controls
- ✅ Loading states
- ✅ Empty states

---

## 🛠 Tech Stack

### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2 | UI library |
| TypeScript | 5.2 | Type safety |
| Vite | 5.2 | Build tool & dev server |

### Routing & State
| Technology | Version | Purpose |
|------------|---------|---------|
| React Router | 6.23 | Client-side routing |
| Context API | Built-in | Global state management |

### UI & Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.4 | Utility-first CSS |
| shadcn/ui | Latest | Pre-built components |
| Radix UI | Latest | Headless UI primitives |
| Lucide React | 0.378 | Icon library |
| class-variance-authority | 0.7 | Component variants |
| tailwind-merge | 2.3 | Class name merging |

### Forms & Validation
| Technology | Version | Purpose |
|------------|---------|---------|
| React Hook Form | 7.51 | Form handling |
| Zod | 3.23 | Schema validation |
| @hookform/resolvers | 3.3 | Form validation integration |

### Data Fetching
| Technology | Version | Purpose |
|------------|---------|---------|
| Axios | 1.6 | HTTP client |
| TanStack Table | 8.16 | Headless table library |

---

## 🚀 Installation

### Prerequisites

- Node.js 18.0 or later
- npm 10.5+

### Setup Steps

**1. Navigate to frontend directory**

```bash
cd apps/frontend
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

```bash
cp .env.example .env.local
```

Configure `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

**4. Start development server**

```bash
npm run dev
```

Application will be available at `http://localhost:5173`

---

## 📁 Project Structure

**Frontend Directory (`apps/frontend/`):**

- `src/` - Source code
  - `components/` - React components
    - `custom/` - Custom components
      - `MainLayout.tsx` - App layout wrapper
      - `MovieForm.tsx` - Create/Edit movie form
      - `MovieTable.tsx` - Data table component
      - `MovieTableColumns.tsx` - Table column definitions
    - `ui/` - shadcn/ui components
      - `button.tsx` - Button component
      - `input.tsx` - Input component
      - `dialog.tsx` - Dialog component
      - `toast.tsx` - Toast component
      - `...` - More components
  - `context/` - Context providers
    - `AuthContext.tsx` - Authentication state
  - `pages/` - Page components
    - `Dashboard.tsx` - Main dashboard page
    - `Login.tsx` - Login page
    - `Signup.tsx` - Registration page
  - `services/` - API services
    - `api.ts` - Axios instance & API calls
  - `lib/` - Utilities
    - `utils.ts` - Utility functions
  - `App.tsx` - Root component
  - `main.tsx` - Entry point
  - `index.css` - Global styles

- `public/` - Static assets
- `index.html` - HTML template
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript config
- `vite.config.ts` - Vite config
- `tailwind.config.js` - Tailwind config
- `postcss.config.js` - PostCSS config
- `vercel.json` - Vercel deployment config
- `.env.local` - Environment variables

---

## 🧩 Components

### Custom Components

#### MainLayout
```typescript
// src/components/custom/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

export function MainLayout() {
  const { user, logout } = useAuth();
  
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Movies & TV Shows</h1>
          {user && (
            <div className="flex items-center gap-4">
              <span>{user.email}</span>
              <Button onClick={logout}>Logout</Button>
            </div>
          )}
        </div>
      </nav>
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  );
}
```

#### MovieForm
```typescript
// src/components/custom/MovieForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const movieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.enum(['movie', 'tvshow']),
  director: z.string().min(1, 'Director is required'),
  year: z.string().regex(/^\d{4}$/, 'Year must be 4 digits'),
  budget: z.string().optional(),
  duration: z.string().optional(),
  location: z.string().optional(),
  poster: z.instanceof(FileList).optional(),
});

export function MovieForm({ onSubmit, defaultValues }) {
  const form = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input {...form.register('title')} placeholder="Title" />
      <Input {...form.register('director')} placeholder="Director" />
      <Input {...form.register('year')} placeholder="Year" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

#### MovieTable
```typescript
// src/components/custom/MovieTable.tsx
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { Table } from '@/components/ui/table';

export function MovieTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      <Table>
        {/* Table implementation */}
      </Table>
    </div>
  );
}
```

### shadcn/ui Components

Available components:
- `Button` - Customizable button
- `Input` - Form input field
- `Label` - Form label
- `Dialog` - Modal dialog
- `AlertDialog` - Confirmation dialog
- `Select` - Dropdown select
- `DropdownMenu` - Action menu
- `Toast` - Notification toast

**Usage:**
```typescript
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog } from '@/components/ui/dialog';

<Button variant="default">Click me</Button>
<Input type="text" placeholder="Enter title" />
```

---

## 🗺️ Routing

### Routes Configuration

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import { MainLayout } from './components/custom/MainLayout';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Route>
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
```

### Protected Route Component

```typescript
// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function ProtectedRoute() {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return user ? <Outlet /> : <Navigate to="/login" />;
}
```

---

## 🔄 State Management

### Auth Context

```typescript
// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/services/api';

interface User {
  id: number;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const response = await api.get('/auth/me');
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    setUser(response.data.user);
  };

  const register = async (email: string, password: string, name: string) => {
    const response = await api.post('/auth/register', { email, password, name });
    setUser(response.data.user);
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

---

## 🌐 API Integration

### Axios Configuration

```typescript
// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Send cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login on auth error
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### API Service Functions

```typescript
// src/services/api.ts

// Auth APIs
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
};

// Movie APIs
export const movieAPI = {
  getAll: (params) => api.get('/movies', { params }),
  getOne: (id) => api.get(`/movies/${id}`),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'poster' && data[key]?.[0]) {
        formData.append('poster', data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.post('/movies', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'poster' && data[key]?.[0]) {
        formData.append('poster', data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/movies/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  delete: (id) => api.delete(`/movies/${id}`),
};
```

### Usage in Components

```typescript
// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { movieAPI } from '@/services/api';
import { MovieTable } from '@/components/custom/MovieTable';

export function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieAPI.getAll({ page: 1, limit: 20 });
        setMovies(response.data.movies);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieTable data={movies} />
      )}
    </div>
  );
}
```

---

## 🎨 Styling

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Global Styles

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## ☁️ Deployment

### Vercel Deployment

**1. Install Vercel CLI**

```bash
npm install -g vercel
```

**2. Deploy**

```bash
cd apps/frontend
vercel --prod
```

**3. Configure environment variables in Vercel dashboard**

Go to Vercel project settings → Environment Variables:

```env
VITE_API_URL=https://backend-service-659948353959.us-central1.run.app/api
```

### Vercel Configuration

```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures that all routes are handled by React Router.

### Build Settings

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Framework Preset:** Vite

---

## 🔧 Environment Variables

### Development (.env.local)

```env
VITE_API_URL=http://localhost:5000/api
```

### Production (Vercel)

```env
VITE_API_URL=https://backend-service-659948353959.us-central1.run.app/api
```

**Note:** All environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

**Usage in code:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🛠️ Development Tools

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### VS Code Extensions

Recommended extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 📱 Pages Overview

### Login Page
- Email and password form
- Form validation with Zod
- Error handling
- Redirect to dashboard on success
- Link to signup page

### Signup Page
- Email, password, and name form
- Password strength validation
- Error handling
- Redirect to dashboard on success
- Link to login page

### Dashboard Page
- Movie/TV show table
- Search functionality
- Filter by type
- Pagination
- Add new movie button
- Edit and delete actions
- Infinite scroll support

---

## 🧪 Testing

### Manual Testing

```bash
# Start development server
npm run dev

# Open browser
http://localhost:5173

# Test user flows:
# 1. Register new user
# 2. Login
# 3. Create movie
# 4. Upload image
# 5. Edit movie
# 6. Delete movie
# 7. Search movies
# 8. Logout
```

---

## 🤝 Contributing

See the [main README](../../README.md) for contribution guidelines.

---

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

---

<p align="center">
  Made with ❤️ using React & Vite
  <br><br>
  <a href="https://github.com/yourusername/movies-tvshows-app">Back to Main README</a>
</p>
```

---



Let me know if you need any modifications or have any issues!
