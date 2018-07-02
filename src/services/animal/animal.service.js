// Initializes the `animal` service on path `/animal`
const createService = require('feathers-mongoose');
const createModel = require('../../models/animal.model');
const hooks = require('./animal.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/animal', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('animal');

  service.hooks(hooks);
};
