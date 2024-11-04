import express from "express";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";
const router = express.Router();

import db from "../db.js";
import { genSalt } from "bcrypt";

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

    const saltRound = 10;
    const salt = await genSalt(saltRound);
    const byrypuPass = await bcrypt.hash(password, salt);
    const data = await db.query(
      "INSERT INTO users (user_name , user_email, user_password)   VALUES ($1 , $2 , $3) RETURNING *",
      [name, email, byrypuPass]
    );
    //Create JWT generator
    const token = jwtGenerator(data.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
// Login route

router.post("/login", async (req, res) => {
  try {
    // 1. destructore the req.body

    const { email, password } = req.body;
    const user = await db.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    // 2. check if user doesn't exixt (if not throw error)

    if (user.rows.length === 0) {
      res.status(401).json(" password or email is incorrect ");
    }

    // 3. check incomming password is same as database password

    const validPass = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    if (!validPass) {
      res.status(401).json("password or email is incorrect ");
    }
    // 4. give them jwt token

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

export default router;
