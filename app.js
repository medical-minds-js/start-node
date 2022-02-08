    require('dotenv').config();
  const events = require('events');
  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
   const api_routes = require('./routes');

//Inicio de la aplicacion
  const app = express();

//Configuraciones de entrada del api
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  }));
  app.use(bodyParser.json({
    limit: '50mb',
  }));
    app.use(cors({
    origin: true,
    credentials: true,
  }));

//Definición de archivos y carpetas publicas
  app.use(express.static(`${__dirname}/dist`));
  app.use('/downloads', express.static(`${__dirname}/downloads/`));
  app.use('/uploads', express.static(`${__dirname}/uploads/`));

  // Rutas
api_routes(app);

  //Inicio del servidor
  const server = app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running in port: ${process.env.APP_PORT}`);
});
