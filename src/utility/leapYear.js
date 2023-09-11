
/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * Leap year  function.
 */


/**
   * Determine if a year is a leap year.
   * @param {number} Year .
   * @returns {boolean} True if it's a leap year, false otherwise.
   * @example
   * const calendar = require('./isLeapYear');
   * const isLeapYear =calendar(2014);
   *  isLeapYear should be false
   */
  exports.isLeapYear = (year) =>{
   let modules = year % 4
   return modules === 0 ? true:false  
  }
 //! Fix ME :( !  write me in tests directory 
  // console.log(isLeapYear(2012))
  // console.log(isLeapYear(2014))
