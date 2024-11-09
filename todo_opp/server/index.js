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

  static async getTasks() {
    const result = await db.query("SELECT * FROM pern_todo");
    return result.rows.map((row) => new Task(...Object.values(row)));
  }

  static async findById(id) {
    const result = await db.query("SELECT * FROM pern_todo WHERE id = $1", [id]);
    return result.rows.length
      ? new Task(...Object.values(result.rows[0]))
      : null;
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
// get all todo
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});
// get by id
app.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ error: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
