const EventMutation = require('./EventMutation');
const LocationMutation = require('./LocationMutation');
const OrganizationMutation = require('./OrganizationMutation');


module.exports = {
  ...EventMutation,
  ...LocationMutation,
  ...OrganizationMutation
};
