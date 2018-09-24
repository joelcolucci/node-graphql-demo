const EventQuery = require('./EventQuery');
const LocationQuery = require('./LocationQuery');
const OrganizationQuery = require('./OrganizationQuery');


module.exports = {
  ...EventQuery,
  ...LocationQuery,
  ...OrganizationQuery
};
