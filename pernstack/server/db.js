import pg from "pg";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "JWT",
  password: "12345",
  port: "5432",
});
db.connect();
export default db;
