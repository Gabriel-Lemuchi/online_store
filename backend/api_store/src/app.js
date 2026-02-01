const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://onlinestore-bice.vercel.app/"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/auth", require("./routes/authRoutes"));

module.exports = app;
