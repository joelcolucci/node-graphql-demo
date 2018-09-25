const Location = require('../../models/LocationModel');


const locations = async (root, args, context, info) => {
  let locations = await Location.find();

  return locations;
};

const location = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let location = await Location.findOne(queryDocument);

  return location;
};


module.exports = {
  location,
  locations
};
