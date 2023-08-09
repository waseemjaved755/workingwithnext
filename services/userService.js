const userModel = require("../models/userModel");

module.exports = {

   createUser : function ()
   {
      const response = userModel.createUser();
      return response;
    },
    
    getUser : function ()
   {
      const response = userModel.getUser();
      return response;
    },
   
};