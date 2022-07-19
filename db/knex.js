import knex from "knex";

const connectedKnex = knex({
    client: "sqlite3", 
    connection:  {
        filename: "blalal.sqlite3"
    }
});

module.exports = connectedKnex;