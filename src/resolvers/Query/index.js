const EventQuery = require('./EventQuery');
const OrganizationQuery = require('./OrganizationQuery');


module.exports = {
  ...EventQuery,
  ...OrganizationQuery
};
