const Location = require('../../models/LocationModel');


const locations = async (root, args, context, info) => {
  let locations = await Location.find();

  return locations;
};


module.exports = {
  locations
};
