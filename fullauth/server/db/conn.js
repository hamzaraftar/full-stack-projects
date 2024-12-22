const pg = require("pg");
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "12345",
  port: "5432",
});
db.connect();
module.exports = db;
