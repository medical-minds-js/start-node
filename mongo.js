const mongoose = require('mongoose');

module.exports = {
  connect() {
    mongoose.connect('mongodb://localhost:27017/learn', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
      .then(() => console.log('Conectado a la base'), (err) => console.log('ERROR: Problemas con la base', err));
  },
};
