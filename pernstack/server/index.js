import express from "express";
import cors from "cors";
import authRoutes from "./routes/jwtAuth.js";
const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use(cors());

// Routes

// register and login
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
