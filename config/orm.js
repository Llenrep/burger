var connection = require("./connection.js");

var orm = {
    selectTable: function(data, tableName){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [data, tableName], function(err, res){
            if (err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;