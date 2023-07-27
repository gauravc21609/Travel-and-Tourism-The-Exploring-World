const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("users.db");

db.run("ALTER TABLE bookings ADD COLUMN date TEXT")

db.close()