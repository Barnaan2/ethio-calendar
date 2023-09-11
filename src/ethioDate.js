const CalculateDate = require('./calcDate');
const MonthInWord = require('./utility/monthLang');
const avilLang = require('./utility/language');
/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * Class representing  the new type of date object in Ethiopian calendar and humanize it.
 */

class EthioDate{
    constructor(lang='amh',date =  new Date()){

        const supportedLanguagesObj = {
            amh: 'Amharic',
            oro: 'Afaan Oromo',
            tig: 'Tigrigna'
          };
        //!fixMe  check wether the provided date is object
        // if (!Number.isInteger(month) || !Number.isInteger(year)) {
        //     throw new Error('Invalid input: Month and year must be integers.');
        //   }
         

 //! FixMe Please
 if (!supportedLanguagesObj[lang]) {
    throw new Error('Invalid language code. Supported codes are "eng" (English), "amh" (Amharic), "oro" (Afaan Oromo), and "tig" (Tigrigna).');
  }
    
        this.date =  new CalculateDate(date).calculate();
        this.lang = new MonthInWord(this.date.month,lang);

  
        
    }

    supportedLanguages(){
        return this.supportedLanguagesObj;
    }

    now(){
        return this.date;
    }
    getMonth(){
        return this.date.month;
    }
    getDay(){
        return this.date.day;
    }
    humanizedDate(){
    return `${this._monthInword()} ${this.date.day} ${this.date.year}`;
    }
    _monthInword(){
        return this.lang.fullLength()
    }


    // methods of the class will be listed here.
}
module.exports = EthioDate;