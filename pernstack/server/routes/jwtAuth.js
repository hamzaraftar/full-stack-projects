import express from "express";
const router = express.Router();

import db from "../db.js";

// registering
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userMail = await db.query(
      "SELECT * FROM users WHERE user_email = $1 ",
      [email]
    );
    if (userMail.rows.length !== 0) {
      return res.status(401).send("User already exist");
    }
    const data = await db.query(
      "INSERT INTO users (user_name , user_email, user_password)   VALUES ($1 , $2 , $2) RETURNING *",
      [name, email, password]
    );
    res.json(data.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
export default router;
