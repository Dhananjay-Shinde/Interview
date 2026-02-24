import express from "express";
import dotenv from "dotenv";
import DB from "./db.js";
dotenv.config();

import userRouter from "./route/admin.route.js";
import clientRouter from "./route/client.route.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/admin/wallet", userRouter);
app.use("/client", clientRouter);

app.listen(port, () => {
  DB();
  console.log(`Server is running on http://localhost:${port}`);
});
