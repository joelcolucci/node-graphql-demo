const mongoose = require('mongoose');


const OrganizationModel = mongoose.Schema({
  name: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  UpdatedAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Organization', OrganizationModel);
