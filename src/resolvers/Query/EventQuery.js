const Event = require('../../models/EventModel');


const events = async (root, args, context, info) => {
  let events = await Event.find();

  return events;
};


module.exports = {
  events
};
