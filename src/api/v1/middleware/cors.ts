import cors from "cors";

const allowedOrigins = [
    "http://localhost:3000",
    "https://content-manager.example.com",
    "https://moderator.example.com",
  ];

const corsConfig = {
    origin: allowedOrigins,
    methods: [ "GET", "POST", "PUT", "DELETE" ],
    allowedHeaders: ["Content-Type","Authorization", "X-Requested-With"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    maxAge: 86400,
}

export default corsConfig