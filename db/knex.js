const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3", 
    connection:  {
        filename: "slrs.sqlite3"
    }
});

module.exports = connectedKnex;