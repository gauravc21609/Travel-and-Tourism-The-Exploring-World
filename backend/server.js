const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const {uuidv4} = require("uuid")
const sqlite3 = require('sqlite3').verbose();

const app = express()
app.use(cors())


// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

const db = new sqlite3.Database('users.db');

app.get("/all", (req, res)=> {
  db.all("SELECT * FROM user", (err, rows)=>{
    if (err){
      console.log(err);
    } else {
      res.send(rows)
    }
  })
})

app.post("/newuser", (req, res)=>{
  // code here
  console.log(req.body);

  db.run(`INSERT INTO user (id, name, password, email) values(${uuidv4()}, ${req.body.name}, ${req.body.password}, ${req.body.email})`)
})


const PORT = 3000

app.listen(PORT, ()=>{
  console.log(`App is running at port http://localhost:${PORT}`);
})