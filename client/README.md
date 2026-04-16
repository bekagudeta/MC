
# Portfolio Client

This folder contains the client-side application for the portfolio website.

## Overview

- Built with React, Vite, Tailwind CSS, and shadcn/ui components
- Uses `react-router-dom` for routing, `zustand` for state management, and `axios` for API requests
- Connects to the backend at `http://localhost:5000/api` by default

## Prerequisites

- Node.js 18+
- `pnpm` recommended, but `npm` can also be used

## Setup

```powershell
cd client
pnpm install
```

If you do not have `pnpm`, use:

```powershell
cd client
npm install
```

## Development

```powershell
cd client
pnpm dev
```

or with npm:

```powershell
cd client
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Build

```powershell
cd client
pnpm build
```

or with npm:

```powershell
cd client
npm run build
```

## Backend configuration

The client uses `VITE_API_URL` for the API base URL when defined.

If not provided, it falls back to:

```text
http://localhost:5000/api
```

## Notes

- Use the server in `../server` for backend API and admin CMS functionality.
- Ensure the backend is running before starting the frontend.
