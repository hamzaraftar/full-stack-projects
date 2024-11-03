const Pool = require("pg").Pool;
const db = new Pool({
  user: "postgres",
  password: 12345,
  host: "localhost",
  port: 5432,
  database: "JWT",
});
module.exports = db