const { object, where } = require("underscore");
const knex = require("./knex");

/**
 * 
 * @param {*} jsonQuery 
 * @returns 
 */
async function matchQuery(jsonQuery){
    if(jsonQuery.sort){
        const resp = await sortSalaries(jsonQuery);
        return resp;
    }
    else if(jsonQuery.fields){
        const resp = await sparseFields(jsonQuery);
        return resp;
    }
    else {
        const resp = await filterSalaries(jsonFilterRequest);
        return resp;
    }
}
/**
 * Parse a json filter request query, 
 * example {name: 'dan', salary : {gte : 120000}}
 * @param {} jsonFilterRequest 
 * @returns a knex query.
 */
function filterSalaries(jsonFilterRequest){
    //Handle salary with comparison
    if(jsonFilterRequest.salary && typeof(jsonFilterRequest.salary) == "object"){
        let signValueArray = parseComparisonQuery(jsonFilterRequest.salary);
        var sign = signValueArray[0]
        var val = signValueArray[1]
        delete jsonFilterRequest['salary'];
        return knex("Salaries").select("*").where(jsonFilterRequest).andWhere('salary', sign , val);
    }
    return knex("Salaries").select("*").where(jsonFilterRequest);
}
/**
 * Parse a query of type { gte : 120000}
 * returns an array that holds the sign in the first index,
 * and the value in the second index.
 * @param {} salaryQuery 
 */
function parseComparisonQuery(comparisonQuery){
    var sign;
    var val;
    switch(Object.keys(comparisonQuery)[0]) {
        case "gte":{
            sign = ">=";
            val = comparisonQuery["gte"];
            break;
        }
        case "lte":{
            sign = "<=";
            val = comparisonQuery["lte"];
            break;
        }
        default:
          // code block
      }
      return [sign, val];
}
// Sort the table
function sortSalaries(sortField){
    return knex("Salaries").select("*").orderBy(sortField.sort);
}
// Narrow down the table according to the fields.
function sparseFields(jsonQuery){
    let rawQuery = "select ".concat(jsonQuery.fields, " from Salaries");
    return knex.raw(rawQuery);
}
module.exports = {
    matchQuery,
    filterSalaries,
    sortSalaries
}