const Location = require('../../models/LocationModel');


const createLocation = async (root, args, context, info) => {
  let newDocument = {
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  await Location.create(newDocument);

  return newDocument;
};

const updateLocation = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let updateDocument = {
    ...args,
    updatedAt: Date.now()
  };

  let updatedDocument = await Location.findOneAndUpdate(
    queryDocument, updateDocument, {new: true, lean: true});

  return updatedDocument;
};

const deleteLocation = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let deletedDocument = await Location.findOneAndDelete(queryDocument, {lean: true});

  return deletedDocument;
}


module.exports = {
  createLocation,
  deleteLocation,
  updateLocation
};
