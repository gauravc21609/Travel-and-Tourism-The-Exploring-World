const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

const db = new sqlite3.Database("users.db");

// Display all users
app.get("/all", (req, res) => {
  db.all("SELECT * FROM user", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});
// create new user
app.post("/newuser", (req, res) => {
  const id = Math.random() * 1000;
  const varId = id.toString();
  // Generate a random ID
  const { name, password, email } = req.body; // Extract values from the request body

  console.log(req.body);
  // Use parameterized queries to safely insert data
  db.run(
    "INSERT INTO user (id, name, password, email) VALUES (?, ?, ?, ?)",
    [varId, name, password, email],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting user data");
      } else {
        console.log("User data inserted successfully");
        res.status(200).send("User data inserted successfully");
      }
    }
  );
});

// login for user
app.post("/login", (req, res) => {
  // code here
  db.all(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [req.body.email, req.body.password],
    (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        if (rows.length > 0) {
          res.status(200).send(rows[0]);
        } else {
          res.status(404).send("No detail found");
        }
      }
    }
  );
});

// create a new blog
app.post("/addblog", (req, res) => {
  console.log(req.body);

  db.run(
    "INSERT INTO blogs (id, title, content, location, date) VALUES (?, ?, ?, ? , ?)",
    [
      Math.random() * 1000,
      req.body.title,
      req.body.content,
      req.body.location,
      req.body.date,
    ],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting user data");
      } else {
        console.log("User data inserted successfully");
        res.status(200).send("User data inserted successfully");
      }
    }
  );
});

// get all the blogs
app.get("/getBlog", (req, res) => {
  db.all("SELECT * FROM blogs", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

// get single blog
app.get("/getSingleBlog", (req, res) => {
  console.log(req.query.id);

  db.all("SELECT * FROM blogs where id = ?", [req.query.id], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

// post reservations or bookings
app.post("/booking", (req, res) => {
  const id = Math.floor(Math.random() * 1000);

  console.log(req.body);

  db.run(
    "INSERT INTO bookings (id, name, email, address, boarding, type, count, phone, destination, date ) VALUES (?, ?, ?, ?, ?,?,?,?,?, ?)",
    [
      id,
      req.body.name,
      req.body.email,
      req.body.address,
      req.body.boarding,
      req.body.type,
      req.body.count,
      req.body.phone,
      req.body.destination,
      req.body.date
    ],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting user data");
      } else {
        console.log("User data inserted successfully");
        res.status(200).send("User data inserted successfully");
      }
    }
  );
});

// get all the bookings
app.get("/getBooking", (req, res) => {
  db.all("SELECT * FROM bookings", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running at port http://localhost:${PORT}`);
});
