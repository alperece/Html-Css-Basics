var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: ""
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE javatpoint1", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});  