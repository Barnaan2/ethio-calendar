const CalculateDate = require('./calcDate');
const MonthInWord = require('./utility/monthLang');
class EthioDate{
    constructor(lang='eng',date=  new Date()){
        this.date =  new CalculateDate(date).calculate();
        this.lang = new MonthInWord(this.date.month,lang);
  
        
    }
    now(){
        return this.date;
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