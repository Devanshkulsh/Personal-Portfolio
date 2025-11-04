require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS - allow frontend origins
const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
//   Fallback allow all in dev
app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
  })
);

// Rate Limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // limit each IP to 30 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// Health
app.get("/api/health", (req, res) => res.json({ ok: true }));

// DB connect + start
const PORT = process.env.port || 4000;
const MONGO = process.env.MONGO_URI;
mongoose
  .connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connected");
    app.listen(PORT, () => console.log("Server running on", PORT));
  })
  .catch((err) => {
    console.error("DB connection error", err);
    process.exit(1);
  });
