const HomeCtrl = require('./controllers/home.controller');
const UserCtrl = require('./controllers/user.controller');
/**
   * Archivo de rutas
   *
   */
module.exports = (app) => {
  app.get('/api/v1/home', HomeCtrl.getHome);
  app.get('/api/v1/users', UserCtrl.getUsers);
  app.post('/api/v1/users/create', UserCtrl.createUser);
};
