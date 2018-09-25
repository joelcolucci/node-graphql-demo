const Event = require('../models/EventModel');
const Location = require('../models/LocationModel');
const Organization = require('../models/OrganizationModel');
const Query = require('./Query/index');
const Mutation = require('./Mutation/index');


let resolvers = {
  Query,
  Mutation,
  Organization: {
    events: async (root, args, context, info) => {
      let organizationID = root.id || args.id;
      let eventsByOrganizationID = await Event.find({organizationID: organizationID});

      return eventsByOrganizationID;
    },
    locations: async (root, args, context, info) => {
      let organizationID = root.id || args.id;
      let locationsByOrganizationID = await Location.find({organizationID: organizationID});

      return locationsByOrganizationID;
    }
  },
  Event: {
    organization: async (root, args, context, info) => {
      let organizationID = root.organizationID;
      let organization = await Organization.findOne({_id: organizationID});

      return organization;
    }
  },
  Location: {
    organization: async (root, args, context, info) => {
      let organizationID = root.organizationID;
      let organization = await Organization.findOne({_id: organizationID});

      return organization;
    }
  }
};


module.exports = resolvers;
