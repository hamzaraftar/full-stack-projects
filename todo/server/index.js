import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "12345",
  port: "5432",
});
db.connect();

// middleware
app.use(cors());
app.use(express.json());

// ROUTES
//create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await db.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.massage);
  }
});

//get all todo
app.get("/todos", async (req, res) => {
  try {
    const getTodo = await db.query("SELECT * FROM todo");
    res.json(getTodo.rows);
  } catch (error) {
    console.log(error.massage);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.query("SELECT * FROM todo WHERE todo_id=$1 ", [id]);
    res.json(todo.rows);
  } catch (error) {
    console.log(error.massage);
  }
});

//update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await db.query(
      "UPDATE todo SET description =$1 WHERE todo_id =$2",
      [description, id]
    );
    res.json("todo was updated succesfully");
  } catch (error) {
    console.log(error.massage);
  }
});

//delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id =$1", [
      id,
    ]);
    res.json("Delete succesfully ...");
  } catch (error) {
    console.log(error.massage);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
