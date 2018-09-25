const Organization = require('../../models/OrganizationModel');


const organizations = async (root, args, context, info) => {
  let organizations = await Organization.find();

  return organizations;
};

const organization = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let organization = await Organization.findOne(queryDocument);

  return organization;
};


module.exports = {
  organization,
  organizations
};
