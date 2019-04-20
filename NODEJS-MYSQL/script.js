var express = require("express");
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
  // properties
  host: "localhost",
  user: "root",
  password: "",
  database: "sampleDB"
});

connection.connect(function(error) {
  if (!!error) {
    console.log("error");
  } else {
    console.log("connected");
  }
});

app.get('/',function(req, resp){
// about mysql
connection.query("SELECT * FROM sampleDB", function(error, rows, fields)
if(!!error){
    console.log('Error in the query');
} else {

    console.log('Successful query');
//parse with your rows/fields
}
});

app.listen(1337);