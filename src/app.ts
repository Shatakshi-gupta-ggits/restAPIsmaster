import express, {NextFunction, Request, Response } from "express";
import { config } from "./config/config";
import createHttpError , {HttpError} from "http-errors";
interface HttpError extends Error {
  statusCode?: number;
}

const app = express();

//Routes -- urls

//Http methods - get, post , put , patch, delete
app.get('/', (req: Request, res: Response, next) => {
   const error = createHttpError(500, "Something went wrong")
  throw error;
   res.json({message: "welcome to my apis"})
});

// Global error handler
app.use((err: HttpError , req:Request, res: Response, next: NextFunction) => {
     const statusCode = err.statusCode || 500;

     return res.status(statusCode).json({
            message: err.message;
            errorStack: config.env == 'development' ? err.stack : " ",

     });
});

export default app;