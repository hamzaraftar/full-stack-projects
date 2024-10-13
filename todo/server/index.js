import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "12345",
  port: "5432",
});
db.connect();

//Middleware
app.use(cors());
app.use(express.json());

//Create todo

app.post("/todo", async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await db.query(
      "INSERT INTO pern_todo (title,description) VALUES($1,$2) RETURNING *",
      [title, description]
    );
    res.json(data.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
