const languages = require('./language');

// it will be better if there is a class that will create a month with the specified language.
class MonthInWord {
    constructor(month,lang){
        // array index starts from zero .
        month--;
        this.monthIndex = month;
        this.lang = languages[lang.lang];
        
        
        
    }

    fullLength(){
        return this.lang.fullLength[this.monthIndex];
    }

    shorter(){
        return this.lang.shorter[this.monthIndex];
    }

    
}


module.exports = MonthInWord;