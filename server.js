var express = require('express');

var orm = require('./config/orm');

orm.selectTable("burger_name", "burgers");
orm.selectTable("id", "burgers");
orm.selectTable("devoured", "burgers");
