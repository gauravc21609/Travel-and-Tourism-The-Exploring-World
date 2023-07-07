const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("users.db");

db.run("DELETE FROM blogs where title='dfhgj'")

db.close()