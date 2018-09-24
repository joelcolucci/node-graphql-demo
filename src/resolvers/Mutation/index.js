const EventMutation = require('./EventMutation');
const OrganizationMutation = require('./OrganizationMutation');


module.exports = {
  ...EventMutation,
  ...OrganizationMutation
};
