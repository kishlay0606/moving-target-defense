var connection = require('./../index.js');
const client1 = require('./../index.js');
var Cryptr = require('cryptr');
var express = require("express");
var Sequelize = require('sequelize');
var app = express()

module.exports.register1 = function (req, res) {
  var today = new Date();
  var encryptedString = req.body.password1;
  var users = {
    "name": req.body.name1,
    "phonenumber": req.body.phonenumber,
    "USN": req.body.email1,
    "password": encryptedString,
    "createdAt": today,
    "updatedAt": today
  }
  name1 = users.name;
  ph1 = users.phonenumber;
  usn1 = users.USN;
  pass = users.password;
  // cre=users.createdAt;
  //upd=users.updatedAt;
 // console.log(name1);
  var mysql = require('mysql');
  // var connection = mysql.createConnection(...);
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: 'carti',
    password: "p64266426"
  });
  if (i == 1) {
    connection.query('truncate table users');
  }

  connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {


    if (error) {

      console.log(error)
      res.json({

        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.sendfile('./thankyou.html');
      const { Client } = require('pg')
      const client = new Client({
        user: "postgres",
        password: "p64266426",
        host: "localhost",
        port: 5432,
        database: "carti"

      })



      client.connect()
        .then(() => console.log("connected"))
        //.then(() => client.query('truncate table collers') )
        .then(() => client.query('INSERT INTO colles(name, phonenumber,usn, password) VALUES($1, $2, $3, $4)', [name1, ph1, usn1, pass]))

        .then(() => res.sendfile('./index.html'))
        .catch(e => console.log(e))

    }
  });
}

if (i == 0) {
  const { Client } = require('pg')
  const client = new Client({
    user: "postgres",
    password: "p64266426",
    host: "localhost",
    port: 5432,
    database: "carti"

  })
  client.query('truncate table colles');
}

