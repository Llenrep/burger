var orm = require('./config/orm'); //require the functions from orm


var burger = {
    all: function(userTable,cb){
        orm.selectAll(userTable, function(res){
            cb(res);
        });
    },

    add: function(userTable, userColumn1, userColumn2, userValue1, userValue2, cb){
        orm.insertOne(userTable, userColumn1, userColumn2, userValue1, userValue2, function(){
            cb(res)
        });
    },

    update: function(userTable, userColumn1, userColumn2, userValue1, userValue2, cb){
        orm.updateOne(userTable, userColumn1, userValue1, userColumn2, userValue2, function(res){
            cb(res);
        });
    },

    delete: function(userTable, userColumn1, userValue1, cb){
        orm.deleteOne(userTable, userColumn1, userValue1, function(res){
            cb(res);
        }); 
    }
}

// var getItems = orm.selectAll(userTable);//presents the table
// var addBurger = orm.insertOne(userTable, userColumn1, userColumn2, userValue1, Bool); //allows user to insert a burger
// var updateBurger = orm.updateOne(userTable, userColumn1, userValue1, userColumn2, userValue2);
// var deleteBurger = orm.deleteOne(userTable, userColumn1, userValue1); 

module.exports = burger;
