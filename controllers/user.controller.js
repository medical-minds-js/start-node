const { userRepository } = require('../repository/user.repository');

/**
   *
   */
module.exports = {

  /**
   * Creacion de usuario
   */
  async  createUser(req, res) {
    const { name } = req.body;
    const previous = await userRepository.findName(name);
    if (previous.length === 0) {
      const user = await userRepository.create(name);
      return res.status(200).send({ user });
    }
    return res.status(401).send({ message: 'El usuario ya existe' });
  },

  /**
   * Lista de usuarios
   */
  async getUsers(req, res) {
    const users = await userRepository.getUsers();
    return res.status(200).send({ users });
  },
};
