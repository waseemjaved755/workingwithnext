const userService = require("../services/userService");

module.exports = {
createUser : function(req , res)
{
  const response = userService.createUser();
  res.send(response);
},


};