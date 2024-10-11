import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);



app.listen(process.env.APPICATION_PORT, () => {
    console.log(`Server is running on port ${process.env.APPICATION_PORT}`);
})