const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("users.db");

db.run("CREATE TABLE blogs (id INT, title TEXT, content TEXT, location TEXT, date TEXT)")

db.close()