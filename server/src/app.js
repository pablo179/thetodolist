import express from "express";
import morgan from "morgan";
import routes from './routes/index.js';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.use((_req, _res, next) => {
  next(new Error("Not Found"));
});

export default app;