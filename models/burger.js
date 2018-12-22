var orm = require('../config/orm.js'); //require the functions from orm


// var burger = {
//     all: function(userTable,cb){
//         orm.selectAll(userTable, function(res){
//             cb(res);
//         });
//     },

//     add: function(userTable, userColumn1, userColumn2, userValue1, userValue2, cb){
//         orm.insertOne(userTable, userColumn1, userColumn2, userValue1, userValue2, function(){
//             cb(res)
//         });
//     },

//     update: function(userTable, userColumn1, userColumn2, userValue1, userValue2, cb){
//         orm.updateOne(userTable, userColumn1, userValue1, userColumn2, userValue2, function(res){
//             cb(res);
//         });
//     },

//     delete: function(userTable, userColumn1, userValue1, cb){
//         orm.deleteOne(userTable, userColumn1, userValue1, function(res){
//             cb(res);
//         }); 
//     }
// }

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

// var getItems = orm.selectAll(userTable);//presents the table
// var addBurger = orm.insertOne(userTable, userColumn1, userColumn2, userValue1, Bool); //allows user to insert a burger
// var updateBurger = orm.updateOne(userTable, userColumn1, userValue1, userColumn2, userValue2);
// var deleteBurger = orm.deleteOne(userTable, userColumn1, userValue1); 

// module.exports = burger;
