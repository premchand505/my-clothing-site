3. Frontend README (/apps/frontend/README.md)
🖥️ Movies & TV Shows - Frontend
<p align="center"> <strong>A React + Vite frontend for the Movies & TV Shows App.</strong> </p>

<p align="center"> <a href="#-getting-started">Installation</a> • <a href="#-project-structure">Structure</a> • <a href="#-deployment-vercel">Deployment</a> </p>

<p align="center"> <img src="" alt="React"> <img src="" alt="Vite"> <img src="" alt="TypeScript"> <img src="" alt="Tailwind CSS"> <img src="" alt="shadcn/ui"> <img src="" alt="Vercel"> </p>

📋 Table of Contents







✨ Features

Modern UI: Built with React, Vite, and styled with Tailwind CSS and shadcn/ui.


Client-Side Routing: Uses react-router-dom for navigation.


Protected Routes: A <ProtectedRoute> component guards pages from unauthenticated access.


State Management: Global authentication state is managed via AuthContext.


Data Fetching: Uses axios for all API communication with the backend.


Data-Grid: Implements TanStack Table for a powerful and sortable movie data table.


Forms: Type-safe forms built with react-hook-form and zod for validation.


Infinite Scroll: Custom useInfiniteScroll hook for efficient data loading.

🛠 Tech Stack

Core: , , 


Routing: 


UI & Styling: , , 


Forms: , 


Data Fetching: 


Tables: 


Deployment: 

🚀 Getting Started
Prerequisites
Node.js (v18+)

npm (v10+)

A running backend server (locally or deployed)

Installation
Navigate to frontend

Install dependencies

(This step is ideally done from the root: npm install)

Set up environment variables

Create a .env.local file. You can copy the example:

Run development server

This command is run from the monorepo root.

The server will start on http://localhost:5173.

🔑 Environment Variables
The .env.local file in apps/frontend requires the following variable:

📁 Project Structure
The apps/frontend/src directory is organized as follows:

🔑 Demo Credentials
Authentication is implemented. You can use the "Sign Up" feature or log in with the provided demo account.

Email: testuser@gmail.com

Password: password123

☁️ Deployment (Vercel)
The frontend is configured for easy deployment on Vercel.

Connect Your Git Repository:

Push your monorepo to GitHub/GitLab/Bitbucket.

Create a new project on Vercel and import the repository.

Configure Project:

Framework: Vercel should auto-detect Vite.

Root Directory: Set this to apps/frontend.

Build Command: npm run build

Output Directory: dist

Set Environment Variables:

In the Vercel project settings, add the following environment variable:

VITE_API_URL = https://<your-gcp-backend-service-url>/api

vercel.json

A vercel.json file is included in the frontend directory  to ensure client-side routing (like react-router-dom) works correctly by redirecting all unknown paths to index.html.

Deploy:

Vercel will automatically build and deploy the frontend. The backend CORS policy has already been configured to allow requests from Vercel
