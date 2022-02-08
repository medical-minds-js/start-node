const HomeCtrl = require('./controllers/home.controller')
/**
   * Archivo de rutas
   * 
   */
module.exports = (app) => {
  app.get('/api/v1/home', HomeCtrl.getHome);
  app.post('/api/v1/home', HomeCtrl.getHome);
  
};
