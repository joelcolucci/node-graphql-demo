const mongoose = require('mongoose');


const LocationModel = mongoose.Schema({
  organizationID: {
    type: String
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Location', LocationModel);
