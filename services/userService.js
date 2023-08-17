const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');


module.exports = {

   createUser: async function (body) {
      try {
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);
        const response = await userModel.createUser(body);
        if (response) {
          delete response.dataValues.password;
          return response;
        }
        return "user not created";
      } catch (error) {
        return error;
      }
    },
    
    getUser : async function ()
   {
    try {
      const response = await userModel.getAllUsers();
      if (response) {
        return response;
      }
      return "No Data Exists";
    } catch (error) {
      return error;
    }
    },

    getUserByEmail: async function (email) {
      try {
        const response = await userModel.getUserByEmail(email);
        if (response) {
          return response;
        }
        return "No Such User Exists";
      } catch (error) {
        return error;
      }
    },
   
};