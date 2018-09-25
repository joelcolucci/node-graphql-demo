const Location = require('../../models/LocationModel');


const createLocation = async (root, args, context, info) => {
  let location = {
    ...args,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  await Location.create(location);

  return location;
};

const updateLocation = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let updateDocument = {
    ...args,
    updatedAt: new Date()
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
