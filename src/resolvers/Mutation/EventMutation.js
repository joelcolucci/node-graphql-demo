const Event = require('../../models/EventModel');


const createEvent = async (root, args, context, info) => {
  let event = {
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  await Event.create(event);

  return event;
};

const updateEvent = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let updateDocument = {
    ...args,
    updatedAt: Date.now()
  };

  let updatedDocument = await Event.findOneAndUpdate(
    queryDocument, updateDocument, {new: true, lean: true});

  return updatedDocument;
};

const deleteEvent = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let deletedDocument = await Event.findOneAndDelete(queryDocument, {lean: true});

  return deletedDocument;
}


module.exports = {
  createEvent,
  deleteEvent,
  updateEvent
};
