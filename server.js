var express = require('express');

var orm = require('./config/orm');

orm.selectAll("burgers"); //just have to put the table name

// orm.insertOne("burgers", "burger_name", "devoured", "Triple-Decker", 0) //Table,

// orm.updateOne("burgers", "burger_name", "Double-Decker", "id", "4");
