// Get the client
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "my",
  password: "",
  database: "first",
});

// A simple SELECT query
connection.connect(function (err) {
  if (err) throw err;
  connection.query("SELECT * FROM login", function sql(err, result) {
    if (err) throw err;
    console.log(result);
  });
});


