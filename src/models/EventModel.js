const mongoose = require('mongoose');


const EventModel = mongoose.Schema({
  organizationID: {
    type: String
  },
  name: {
    type: String
  },
  startDate: {
    type: String
  },
  startTime: {
    type: String
  },
  description: {
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


module.exports = mongoose.model('Event', EventModel);
