import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import connectDB from "./Config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import errorHandler from "./errorHandler.js";

const app = express();
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use("/api", userRoutes());

app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
