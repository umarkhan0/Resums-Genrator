import express from "express";
const app = express();
import router from "./routes/index.js";
import chalk from "chalk";
import cors from "cors"
import mongoose from "./db/index.js";
import 'dotenv/config.js'
const PORT = process.env.PORT || 8000
let db = mongoose.connection;
db.on("error" , console.error.bind(console, "connection error"));
db.once("open" , function () {
    console.log(chalk.blue("db connected!"));
});
app.use(express.json());
app.use("/", (req, res, next) => {
        next()
app.use("/api", router);
})
app.listen(PORT, () => {
    console.log("Server is runing port", PORT);
});
app.use(cors())