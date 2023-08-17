module.exports = {

    createUser: async function (body) {
        try {
          return await models.User.create({ ...body });
        } catch (error) {
          return error;
        }
      },
    
      getAllUsers: async function () {
        try {
          return await models.User.findAll({
            attributes: { exclude: ["password"] },
          });
        } catch (error) {
          return error;
        }
      },
    
      getUserByEmail: async function (email) {
        try {
          return await models.User.findOne({
            where: {
              email: email,
            },
            attributes: {
              exclude: ["password"],
            },
          });
        } catch (error) {
          return error;
        }
    },

    updateUser : async (body) => {
       
        try {
             return await models.update({...body},{where : {
              id : body.id,},
            })
        }
        catch(error){

        }
    },

};