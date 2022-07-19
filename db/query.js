import knex from "./knex";

// Filter the cars given params
function filterSalaries(jsonFilterRequest){
    return knex("Salaries").select("*").where(jsonFilterRequest);
}

// Sort the table
function sortSalaries(sortField){
    return knex("Salaries").select("*").orderBy(sortField);
}

module.exports = {
    filterSalaries,
    sortSalaries
}