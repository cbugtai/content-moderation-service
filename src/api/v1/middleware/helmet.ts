import { Request, Response, NextFunction } from "express";
import helmet from "helmet";

export const helmetConfig = (req: Request, res: Response, next: NextFunction ) => {
    helmet({
        contentSecurityPolicy: {
            useDefaults: false,
            directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            objectSrc: ["'none'"],
            imgSrc: ["'self'"],
            styleSrc: ["'self'"],
            },
        },
        xPoweredBy: false,
        referrerPolicy: {
            policy: "same-origin",
        }
    })

    (req, res, () => {
        res.setHeader("X-XSS-Protection", "1; mode=block")
        next();
    })
}