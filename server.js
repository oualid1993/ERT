import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbconnect } from "./config/db.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//import routes
import authRouter from "./routes/authRoutes.js";
import invoiceRouter from "./routes/invoiceRoutes.js";
import messageRouter from "./routes/messageRoutes.js";

//coneecte database
dbconnect();

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

/* app routes */
app.use("/api/Invoice", invoiceRouter);
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

/* get startics file from frontend  */

app.use(express.static("client/build"));

/* open frontend route */
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(port, () =>
  console.log(`srevr running in http://localhost:${port}`)
);
