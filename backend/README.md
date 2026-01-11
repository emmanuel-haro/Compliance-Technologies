# ComplianceTech Backend

This backend provides an API endpoint to receive contact form submissions, stores them in MongoDB and sends a notification email to the configured company email via SMTP.

## Quick start

1. Copy `.env.example` to `.env` and fill in the values (especially `MONGO_URI`, `SMTP_*` and `COMPANY_EMAIL`).

2. Install dependencies:

   cd backend && npm install

3. Start in development mode:

   npm run dev

4. The server will run on `http://localhost:5000` (configured by `PORT`). The frontend should POST to `http://localhost:5000/api/contact`.

## Notes
- If SMTP variables are missing, submissions will still be saved to the DB but email sending will be skipped (you'll see a warning in the logs).