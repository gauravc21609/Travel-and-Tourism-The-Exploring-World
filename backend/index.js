const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("users.db");

db.run(
  "INSERT INTO user (id, name, password, email) VALUES (?, ?, ?, ?)",
  [1, "Gaurav", "password", "email@email"])

db.close()