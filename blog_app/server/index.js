import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 5000;
// Database connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blogpost",
  password: "12345",
  port: "5432",
});
db.connect();

//Middleware
app.use(cors());
app.use(express.json());

// Route
//
app.post("/blogs", async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await db.query(
      " INSERT INTO  blog(title, description) VALUES ($1 , $2) RETURNING * ",
      [title, description]
    );
    res.json(data.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//Get all post

app.get("/blogs", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
