const EthioDate = require('./ethioDate')
/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * File representing  the users using the package.
 */



let dates = new Date("2023-09-12")
const date = new EthioDate('amh',dates);
// console.log(date.humanizedDate());
const wow = date.now();
console.log(` here i am ${wow.month}`);

// Unknown error it says that date.lang() is not a function .
// console.log(date.now());
// console.log(date.humanizedDate());