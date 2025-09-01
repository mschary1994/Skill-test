const cors = require("cors");
const { env } = require("./env");

const allowedOrigins = [
  "http://localhost:5173",
  env.UI_URL   // e.g. http://135.235.192.34:5173
];

const corsPolicy = cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept", "Origin", "X-CSRF-TOKEN"],
});

module.exports = { corsPolicy };
