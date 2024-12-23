const express = require("express");
const router = express.Router();
const client = require("../db/conn");
const jwtutil = require("../utils/jwt");

router.get("/", (req, res) => {
  res.send("auth  home ");
});

router.post("/login", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users");
    if (result.rows.length > 0) {
      let authToken = await jwtutil.create(result.rows[0]);
      res.json({ token: authToken });
    } else {
      res.json({ error: "password or email is incorrect" });
    }
  } catch (error) {
    console.error(error.message);
  }
});

router.post("/signup", (req, res) => {});

module.exports = router;
