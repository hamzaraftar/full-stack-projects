import express from "express";
import jwt from "jsonwebtoken";
import env from "dotenv";

const app = express();
const port = 5000;
env.config();
app.use(express.json());
const posts = [
  {
    username: "hamza",
    title: "this is posts 1",
  },
  {
    username: "asghar",
    title: "this is posts 2",
  },
];

app.get("/", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
  res.json({ accessToken: accessToken });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
