import express from "express";
import { body, validationResult } from "express-validator";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

const router = express.Router();

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").trim().notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, company, email, message } = req.body;

    try {
      // Save to DB only if connected
      let doc = null;
      if (mongoose.connection.readyState === 1) {
        doc = await Contact.create({ name, company, email, message });
      } else {
        console.warn("Not connected to MongoDB; skipping persistence.");
      }

      // Setup transporter. If SMTP is not configured we create an Ethereal test account
      // so developers can test email sending locally and get a preview URL.
      let transporter;
      let usedTestAccount = false;
      let recipient = process.env.COMPANY_EMAIL || email; // fallback to submitter if COMPANY_EMAIL missing

      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("SMTP not fully configured — creating Ethereal test account for local testing.");
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: { user: testAccount.user, pass: testAccount.pass },
        });
        usedTestAccount = true;
      } else {
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
      }

      const mailOptions = {
        from: `${name} <${process.env.SMTP_USER || (usedTestAccount ? "test@ethereal" : "no-reply@localhost")}>`,
        to: recipient,
        subject: `New contact from ${name}${company ? ` - ${company}` : ""}`,
        text: `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`,
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        const previewUrl = usedTestAccount ? nodemailer.getTestMessageUrl(info) : null;
        console.log("Email send info:", { messageId: info.messageId, response: info.response, previewUrl });
        return res.status(201).json({ ok: true, saved: !!doc, emailSent: true, previewUrl, info: { messageId: info.messageId } });
      } catch (sendErr) {
        console.error("Failed to send email:", sendErr);
        return res.status(201).json({ ok: true, saved: !!doc, emailSent: false, error: sendErr.message });
      }
    } catch (err) {
      console.error("Error handling contact:", err);
      return res.status(500).json({ ok: false, error: "Internal server error" });
    }
  }
);

// Test-only endpoint: send a test email using Ethereal account so you can get a preview URL
router.post("/test", async (req, res) => {
  try {
    const to = req.body.to || process.env.COMPANY_EMAIL || req.body.email;
    if (!to) return res.status(400).json({ ok: false, error: "No recipient provided. Pass 'to' in the body or set COMPANY_EMAIL." });

    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });

    const info = await transporter.sendMail({
      from: `Test <${testAccount.user}>`,
      to,
      subject: "ComplianceTech — Test Email",
      text: "This is a test email sent from the ComplianceTech test endpoint.",
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log("Test email sent, preview URL:", previewUrl);
    return res.json({ ok: true, test: true, previewUrl, info: { messageId: info.messageId } });
  } catch (err) {
    console.error("Test email error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;