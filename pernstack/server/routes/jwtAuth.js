import express from "express";
const router = express.Router();

import db from "../db.js";

// registering
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await db.query(
      "INSERT INTO user (user_name , user_email, user_password)   VALUES ($1 , $2 , $2) RETURING *",
      [name, email, password]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
export default router;
