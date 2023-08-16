const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');


module.exports = {

   createUser : function ()
   {
      const saltRounds = 10;
      const hash = bcrypt.hashSync(body.password, saltRounds);

         // Store hash in your password DB.
      const response = userModel.createUser();
      return response;
    },
    
    getUser : function ()
   {
      const response = userModel.getUser();
      return response;
    },
   
};