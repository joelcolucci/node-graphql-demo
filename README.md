# node-graphql-demo
> Demo GraphQL API for an event management application

## Install
The following instructions assume Vagrant and Virtual Box are installed on the user's machine.

### Provision virtual machine
From the project directory run:
```
vagrant up
```

### Login to virtual machine
From the project directory run:
```
# Password: vagrant
vagrant ssh
```

### Install project depenencies in virtual machine
From the default virtual machine home directory (`/home/vagrant`) run:
```
yarn
```

### Start development server
From the default virtual machine home directory (`/home/vagrant`) run:
```
yarn start
```

#### Development Server
GraphQl playground is made available on http://localhost:4000

## Supported Queries
### View an organization:
```
query {
  organization(id: "5ba9545a1a5f0e0e401f5171") {
    id
    name
    events {
      name
    }
    locations {
      name
      address
    }
  }
}
```

### View an event:
```
query {
  event(id: "5ba9545a1a5f0e0e401f5171") {
    id
    name
    organization {
      name
    }
  }
}
```

### View a location:
```
query {
  location(id: "5ba9545a1a5f0e0e401f5171") {
    id
    name
    address
    organization {
      name
    }
  }
}
```

### Additional queries
See GraphQL playground schema for additional queries.


## Future Improvements
### Features
*  Add Lat/Lng to Location via Google Places API
  * In Location createLocation resolver make async call
  * If successful lat/lng lookup add to object

### GraphQL/API
* Factor out common DB calls into function (example: Organization lookup)
* Improve organization of resource field specific resolvers (example: Organization events)
* On delete of organization remove all related resources (locations, events)
* Convert startDate, startTime fields to timestamps
* Review naming conventions for GraphQL resolvers/fields; update as necessary

### Development
* Move config constants to .env file
* Install nodemon to auto re-load dev server on file changes

### Security/Stability
* Sanitize input before DB writes
* Catch and handle DB errors
