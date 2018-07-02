// animal-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const animal = new Schema({
    stage: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    entryDate: {
      type: Date,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
    versionKey: false
  });

  return mongooseClient.model('animal', animal);
};
