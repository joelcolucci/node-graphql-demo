const mongoose = require('mongoose');


const OrganizationModel = mongoose.Schema({
  name: {
    type: String
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


module.exports = mongoose.model('Organization', OrganizationModel);
