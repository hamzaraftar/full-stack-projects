import express from "express";
import authRoute from "./routes/auth.js";
const app = express();
const port = 8000;

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
