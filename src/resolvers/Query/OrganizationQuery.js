const Organization = require('../../models/OrganizationModel');


const organizations = async (root, args, context, info) => {
  let organizations = await Organization.find();

  return organizations;
};


module.exports = {
  organizations
};
