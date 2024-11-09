import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const PORT = 5000;

// connecting database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "12345",
  port: "5432",
});
db.connect();

// Middleware
app.use(cors());
app.use(express.json());

class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static async create({ title, description }) {
    const result = await db.query(
      "INSERT INTO pern_todo  (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    return new Task(...Object.values(result.rows[0]));
  }
}



// API endpoint
app.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
