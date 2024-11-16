const express = require("express");
const db = require("./database/connection");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {});
// create post
app.post("/blog", async (req, res) => {
  try {
    const { title, image, post } = req.body;
    const data = await db.query(
      "INSERT INTO blogs (title , image , post) VALUES($1 , $2 , $3) RETURNING *",
      [title, image, post]
    );
    res.json(data.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
