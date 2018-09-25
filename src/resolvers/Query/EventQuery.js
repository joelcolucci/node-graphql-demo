const Event = require('../../models/EventModel');


const events = async (root, args, context, info) => {
  let events = await Event.find();

  return events;
};

const event = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let event = await Event.findOne(queryDocument);

  return event;
};


module.exports = {
  event,
  events
};
