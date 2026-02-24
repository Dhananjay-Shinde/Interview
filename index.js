import express from "express";
import DB from "./db.js";
import cors from "cors";

import userRouter from "./route/admin.route.js";
import clientRouter from "./route/client.route.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow cookies and headers
  }),
);

app.listen(port, () => {
  DB();
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/admin/wallet", userRouter);
app.use("/client", clientRouter);
