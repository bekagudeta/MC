# Full-Stack Portfolio CMS

This repository contains a full-stack portfolio project with two main parts:

- `client/` - React + Vite portfolio website built with shadcn/ui components, Tailwind CSS, React Router, Zustand, Axios, and React Query.
- `server/` - Express.js backend CMS API with MongoDB, JWT authentication, admin support, and portfolio content management.

## Features

- Portfolio sections: About, Skills, Experience, Education, Research, Achievements, Contact
- Admin-protected API routes for managing portfolio content
- MongoDB database connection with seed data support
- Backend optimization using Helmet, compression, rate limiting, and CORS
- Frontend powered by Vite with responsive design and modern React tooling

## Prerequisites

- Node.js 18+
- MongoDB connection string or Atlas URI
- `pnpm` recommended for the client, but `npm` works too

## Setup

1. Install server dependencies:

```powershell
cd server
npm install
```

2. Install client dependencies:

```powershell
cd ../client
pnpm install
```

If `pnpm` is not installed, use `npm install` instead.

3. Create a `.env` file in `server/` with values similar to the following:

```env
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
ADMIN_USERNAME=admin
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=securepassword
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
PORT=5000
NODE_ENV=development
```

## Run the project

Start the backend server:

```powershell
cd server
npm run dev
```

Start the frontend client:

```powershell
cd client
pnpm dev
```

Then open the client at `http://localhost:5173`.

## Seed sample data

```powershell
cd server
npm run seed
```

## Notes

- The backend exposes REST API routes under `/api/*` and a health check at `/health`.
- The client defaults to `http://localhost:5000/api` and can be configured with `VITE_API_URL`.
- Admin credentials are created automatically if missing; set a secure `ADMIN_PASSWORD` before deployment.
