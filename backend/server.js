import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:8080" }));

app.use("/api/contact", contactRouter);

app.get("/", (req, res) => res.send("ComplianceTech Backend is running"));

// DB connection
const start = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("Connected to MongoDB");
    } else {
      console.warn("MONGO_URI not set; continuing without DB. Submissions will not be persisted.");
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

start();