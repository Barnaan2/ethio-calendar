const languages = require('./language');

/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * Class for changes the month in numbers to the word.
 */


// it will be better if there is a class that will create a month with the specified language.
class MonthInWord {
    constructor(month,lang){
        // array index starts from zero .
        month--;
        this.monthIndex = month;
        this.lang = languages[lang];
        
        
        
    }

    /**
   *To return the name of the current month in the chosen language
   * @returns {string} monthName - The Ethiopian name in local language year.
   * @example
   * const calendar = new MonthInWord(9,'Eng');
   * calendar.fullLength()
   *  ******* "September"
   * 
   *  
   */

    fullLength(){
        return this.lang.fullLength[this.monthIndex];
    }



    /**
   *To return the name of the current month in the chosen language
   * @returns {string} monthName - The Ethiopian name in local language year.
   * @example
   * const calendar = new MonthInWord(9,'Eng');
   * calendar.shorter()
   *  ******* "Sep"
   * 
   *  
   */
    shorter(){
        return this.lang.shorter[this.monthIndex];
    }

    
}


module.exports = MonthInWord;