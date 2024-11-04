import express from "express";
import db from "../db.js";
import { auth } from "../middleware/authroization.js";
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1 ", [
      req.user,
    ]);
    res.json(user.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
