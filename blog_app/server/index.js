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
    const data = await db.query("SELECT * FROM blog");
    res.json(data.rows);
  } catch (error) {
    console.error(error.message);
  }
});
// Get single todo

app.get("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleBlog = await db.query("SELECT * FROM blog  WHERE id = $1", [
      id,
    ]);
    res.json(getSingleBlog.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Delete blog
app.delete("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await db.query("DELETE FROM blog WHERE id = $1", [id]);
    res.json("Delete  successfully ... ");
  } catch (error) {
    console.error(error.message);
  }
});

// Updata blog

app.put("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateBlog = await db.query(
      "UPDATE blog SET  title = $1, description = $2  WHERE id =$3",
      [title, description, id]
    );
    res.json("Update blog successfully ...");
  } catch (error) {
    console.error(error.message);
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
