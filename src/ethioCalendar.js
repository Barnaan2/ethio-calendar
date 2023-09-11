
/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * Class representing the Ethiopian calendar.
 */
class EthiopianCalendar{
    constructor(day=1,month=1,year=1){

        if (!Number.isInteger(month) || !Number.isInteger(year)) {
            throw new Error('Invalid input: Month and year must be integers.');
          }
          else if(!Number.isInteger(day)){
            throw new Error("Invalid input: day must be an integer");

          }

          if (month < 1 || month > 13) {
            throw new Error('Invalid input: Month must be between 1 and 13.');
          }

          if (day < 1 || day > 30) {
            throw new Error('Invalid input: day must be between 1 and 31.');
          }
      
          if (year < 0) {
            throw new Error('Invalid input: Year must be a positive integer.');
          }
        this.day = day;
        this.month = month;
        this.year = year;

    }
}

module.exports = EthiopianCalendar;