const express = require("express");
const cors = require("cors");
const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://onlinestore-bice.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/auth", require("./routes/authRoutes"));

module.exports = app;
