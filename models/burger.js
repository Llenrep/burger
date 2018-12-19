var orm = require('./config/orm');

orm.selectAll("burgers");
orm.insertOne("burgers", "burger_name", "devoured", "Triple-Decker", 0);
orm.updateOne("burgers", "burger_name", "Double-Decker", "id", "4");

module.exports