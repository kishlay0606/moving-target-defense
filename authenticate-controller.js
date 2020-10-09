var Cryptr = require('cryptr');
var Sequelize = require('sequelize');
cryptr = new Cryptr('myTotalySecretKey');
var connection = require('./../index.js');
var connection = require('./../config');
var client = require('./../index.js');

module.exports.authenticate = function (req, res) {
  if (i == 1) {
    const { Client } = require('pg')
    const client = new Client({
      user: "postgres",
      password: "p64266426",
      host: "localhost",
      port: 5432,
      database: "carti"

    })
    var email = req.body.email2;
    var password = req.body.password2;

    client.connect()
      .then(() =>
        JSON.stringify(client.query('SELECT usn from colles where usn=$1', [req.body.email2], function (err, results) {
         // console.log(results.rows[0])
          if (results.rows[0]) {
            // res.sendfile('./thankyou.html');
            client.query('SELECT password from colles where password=$1', [req.body.password2], function (err, results) {
              if (results.rows[0]) {
                res.sendfile('./thankyou.html');
              }
            })
          }
        })))
  }
  if (i == 0) {
    var email = req.body.email2;
    var password = req.body.password2;
    connection.query('SELECT * FROM users WHERE USN = ?', [email], function (error, results, fields) {
      if (error) {
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      } else {

        if (results.length > 0) {
          // if(results.length >0){
          // decryptedString = results[0].password;
          //console.log(results[0].password)
          if (password == results[0].password) {
            res.sendfile('./thankyou.html');

          } else {
            res.json({
              status: false,
              message: "Email and password does not match"
            });
          }

        }
        else {
          res.json({
            status: false,
            message: "Email does not exits"
          });
        }
      }
    });
  }
}