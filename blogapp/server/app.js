const express = require("express");
const db = require("./database/connection");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const app = express();
const port = 3000;

app.use(express.json());

// get all posts
app.get("/blog", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM blogs");
    res.json(data.rows);
  } catch (error) {
    console.error(error.message);
  }
});

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

// post files
app.post("/blogimage", upload.single("file"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.json(req.file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
