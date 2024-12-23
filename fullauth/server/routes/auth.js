const express = require("express");
const router = express.Router();
const client = require("../db/conn");
const jwtutil = require("../utils/jwt");

router.get("/", (req, res) => {
  res.send("auth  home ");
});
router.post("/verify", async (req, res) => {
  let verified = await jwtutil.verify(req.body.token);
  res.json({ "data": verified });
});

router.post("/login", async (req, res) => {
  try {
    const result = await client.query(
      "SELECT * FROM users  WHERE user_email = $1",
      [req.body.user_email]
    );
    if (result.rows.length > 0) {
      delete result.rows[0].user_password;
      let authToken = await jwtutil.create(result.rows[0]);
      res.json({ "token": authToken });
    } else {
      res.status(401).json({ error: "password or email is incorrect" });
    }
  } catch (error) {
    console.error(error.message);
  }
});

router.post("/signup", (req, res) => {});

module.exports = router;
