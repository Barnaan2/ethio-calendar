const EthioDate = require('./ethioDate')
/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * File representing  the users using the package.
 */



let dates = new Date("2023-10-24")
const date = new EthioDate('tig',dates);
// console.log(date.humanizedDate());
const wow = date.now();
console.log(wow);

// Unknown error it says that date.lang() is not a function .
// console.log(date.now());
console.log(date.humanizedDate());