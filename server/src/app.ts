import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import routes from './routes/index';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const err = new Error("Not Found");
  next(err);
});

export default app;