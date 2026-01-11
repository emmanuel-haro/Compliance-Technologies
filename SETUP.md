# Project Setup — Frontend (React) + Backend (Node/Express)

## Overview
This repository contains a Vite + React frontend (`Frontend/`) and an Express backend (`backend/`). The contact form in the frontend posts to the backend `/api/contact` endpoint, which will persist submissions (if MongoDB is configured) and send an email to the configured company email via SMTP.

## Backend setup
1. Copy `backend/.env.example` to `backend/.env` and fill in values:
   - `MONGO_URI` — your MongoDB connection string (Atlas or self-hosted). If omitted, submissions won't be persisted but the server will still run.
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` — your SMTP provider details (SendGrid SMTP, Mailgun SMTP, or company SMTP server).
   - `COMPANY_EMAIL` — the recipient address for contact form submissions.
   - `FRONTEND_ORIGIN` — the frontend origin (default `http://localhost:8080`).

2. Install and run backend:
   - cd backend && npm install
   - npm run dev

3. Server default: http://localhost:5000
   - Test: curl http://localhost:5000/
   - Send a test POST: curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Hello"}'

## Frontend setup
1. Copy `Frontend/.env.example` to `Frontend/.env` and set `VITE_API_BASE_URL` if your backend is on a different URL.
2. cd Frontend && npm install
3. npm run dev
4. Open http://localhost:8080 and test the contact form.

## Email testing tips
- For quick testing you can use providers like [Mailtrap](https://mailtrap.io/) or [SendGrid SMTP](https://sendgrid.com/). Set `SMTP_*` env vars accordingly.
- If SMTP is not set, the backend will still accept submissions but won't send email (a warning will be printed to logs).

## Notes about cleaning "unwanted files"
I can remove specific files on request — please tell me which files you consider unwanted (e.g., `bun.lockb`, `components.json`, etc.) and I will remove them and update `.gitignore` as needed.

If you want, I can also commit these changes and run the full E2E test locally (I attempted to install backend packages but couldn't complete installation in this environment; you should run `npm install` locally in `backend/` to finish installation and then start the server).