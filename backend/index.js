const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("users.db");

db.run("create table bookings (id text,destination text,checkInDate text, travelType text)")

db.close()