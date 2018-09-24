const Organization = require('../../models/OrganizationModel');


const createOrganization = async (root, args, context, info) => {
  let organization = {
    name: args.name,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  await Organization.create(organization);

  return organization;
};

const updateOrganization = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let updateDocument = {
    name: args.name,
    updatedAt: Date.now()
  };

  let updatedDocument = await Organization.findOneAndUpdate(
    queryDocument, updateDocument, {new: true, lean: true});

  return updatedDocument;
};

const deleteOrganization = async (root, args, context, info) => {
  let queryDocument = {
    _id: args.id
  };

  let deletedDocument = await Organization.findOneAndDelete(queryDocument, {lean: true});

  return deletedDocument;
}


module.exports = {
  createOrganization,
  deleteOrganization,
  updateOrganization
};
