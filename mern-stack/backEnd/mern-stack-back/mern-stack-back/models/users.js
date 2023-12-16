const daoUser = require("../daos/users");


module.exports = {
    getUsers,
    createUser
  };

function getUsers(queryFields) {
    return daoUser.find(queryFields);
}

function createUser(user) {
    //
    return daoUser.create(user);
  }