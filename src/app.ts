import express, { Express, Request, Response } from "express";
import cors from "cors";
import moderationRoutes from "./api/v1/routes/moderationRoutes";
import corsConfig from "./api/v1/middleware/cors";

const app: Express = express();
app.use(express.json());

app.use(cors(corsConfig));

/**
 * Mount moderation routes on /api/v1/moderation
 */
app.use("/api/v1/moderation", moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
	res.status(404).json({ message: "Endpoint not found" });
});

export default app;