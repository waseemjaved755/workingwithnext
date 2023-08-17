const sequelize = require("../bin/dbConnection");

//importing models
 const User = require("./definitions/user");

//model array

const models = { User};

const db = {};

db.sequelize = sequelize ;
sequelize.models = models;


module.exports = { db , models };

