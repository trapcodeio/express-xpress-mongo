const {XMongoModel, is} = require('xpress-mongo');
const {dbConnection} = require('../xmongo');

class User extends XMongoModel {
  static schema = {
    username: is.String().required(),
    password: is.String().required(),
    email: is.String().required(),
  };
}

// link the model to a collection
dbConnection.link(User, 'users');

module.exports = User;