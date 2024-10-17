import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 5000;
//Middleware
app.use(cors());
app.use(express.json());

// Route

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
