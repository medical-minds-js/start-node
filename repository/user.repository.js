const { UserModel } = require('../models/user');

module.exports.userRepository = {

  async create(name) {
    return new Promise((resolve, reject) => {
      UserModel.create({ name }, (err, user) => {
        if (err) {
          reject(err);
        }
        resolve(user);
      });
    });
  },

  async findName(name) {
    return UserModel.find({ name });
  },

  async getUsers() {
    return UserModel.find();
  },
};
