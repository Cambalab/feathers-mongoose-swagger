// animal-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const animal = new Schema({
    name: { type: String, required: true },
    entryDate: { type: Date, required: true },
    legs: { type: Number, required: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('animal', animal);
};
