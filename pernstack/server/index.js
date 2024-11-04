import express from "express";
import cors from "cors";
import authRoutes from "./routes/jwtAuth.js";
import dashbord from "./routes/dashbord.js";
const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use(cors());

// Routes

// register and login
app.use("/auth", authRoutes);

// dashbord

app.use("/dashbord", dashbord);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
