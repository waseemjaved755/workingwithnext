const userModel = require("../models/userModel");

module.exports = {

   createUser : function ()
   {
      const response = userModel.createUser();
      return response;
    },
};