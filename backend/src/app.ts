import express from "express";
import cors from "cors";
import morgan from "morgan";
import { json } from "body-parser";
import routes from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(json());
app.use(morgan("dev"));

app.use("/api", routes);

app.use(errorHandler);

export default app;
