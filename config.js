var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'p64266426',
  database : 'carti'
});
connection.connect(function(err){
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error while connecting with database");
  }
  });
  module.exports = connection; 
  

