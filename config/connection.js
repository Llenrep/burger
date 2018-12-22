var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: "localhost",

        port: 8080,

        user: "root",

        password: "root",

        database: "burger_db"
    });
}

connection.connect(function (err) { //this portion simply establishes the connection to MAMP
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;