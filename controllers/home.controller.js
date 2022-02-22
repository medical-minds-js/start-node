const { userRepository } = require('../repository/user.repository');
const { homeService } = require('../services/home.services');

/**
   *
   */
module.exports = {
  /**
   * Controlador de inicio
   */
  async  getHome(req, res) {
    console.log(homeService.sumas(4, 4));
    res.status(200).send({ message: 'Petición de inicio' });
  },
};
