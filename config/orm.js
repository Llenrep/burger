var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res){
            if (err) throw err;
            console.log(res);
        })
    },

    insertOne: function(tableName, col1, col2, val1, val2) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableName, col1, col2, val1, val2], function(err, res){
            if (err) throw err;
            console.log("Burger added chief");
            console.log(res);
            
        })
    },

    updateOne: function(tableName, col1, val1, col2, val2) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, col1, val1, col2, val2], function(err, res){
            if (err) throw err;
            console.log("Burger: " + val1 + " Updated!");
            console.log(res);
        })
    },

    deleteOne: function(tableName, col1, val1) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?"
        connection.query(queryString, [tableName, col1, val1], function(err, res){
            if (err) throw err;
            console.log("Burger: " + val1 + " Removed!");
            console.log(res)
        })
    }
}

module.exports = orm;