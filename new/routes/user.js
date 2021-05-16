var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"617617",
    database:"login1"
})


connection.connect();
module.exports = connection;