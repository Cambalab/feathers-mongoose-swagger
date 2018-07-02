const animal = require('./animal/animal.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(animal);
};
