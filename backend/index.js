//var express = require("express");
//var bodyParser = require("body-parser");
//var cors = require("cors");

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mysql = require("mysql2");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import database from "./database.js";
//import sql from "./sql.js";
const app = express();
/* To handle the HTTP Methods Body Parser is used, Generally used to extract the entire body portion of an incoming request stream and exposes it on req.body
 */
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "my",
  password: "",
  database: "first",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM login", function sql(err, result) {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
  });
});
app.get("/markTable", (req, res) => {
  connection.query("SELECT * FROM mark", function sql(err, result) {
    if (err) throw err;
    res.status(200).json(result);
  });
});
app.put("/login", (req, res) => {
  /* database.push({
    id: database[database.length - 1].id + 1,
    name: req.body.userName,
    pass: req.body.password,
  }); */
  const [setname, setpass] = [req.body.userName, req.body.password];
  const com = [setname, setpass];
  /*connection.query(
    "insert into login (name, pass) values (?,?)",
    [name, pass],
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  ); */
  connection.query(
    "select name,pass from login where name=?",
    setname,
    function (err, result) {
      // console.log(result);
      //  console.log(com);
      var set = result.map(function (val) {
        return val["pass"];
      });
      // console.log(set[0])
      if (set[0] === com[1]) {
        res.status(200).json("ok");
      } else res.status(404).json("not found");
    }
  );
  /*try {
    res.status(200).json("ok");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }*/
});

let port = 8000;

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});
