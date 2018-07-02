// Initializes the `animal` service on path `/animal`
const createService = require('feathers-mongoose');
const createModel = require('../../models/animal.model');
const hooks = require('./animal.hooks');
const m2s = require('mongoose-to-swagger');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
      Model,
      paginate
    },
    animalService = createService(options);

  animalService.docs = {
    description: 'A service to manage animals',
    definitions: {
      animals: m2s(Model)
    }
  };

  // Initialize our service with any options it requires
  app.use('/animal', animalService);

  // Get our initialized service so that we can register hooks
  const service = app.service('animal');

  service.hooks(hooks);
};
