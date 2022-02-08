/**
   *
   */
module.exports = {
  /**
   * Controlador de inicio
   */
  async  getHome(req, res) {
     res.status(200).send({ message: 'Petición de inicio' });
  },
  

};
