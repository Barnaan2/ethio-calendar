// importing is leap method from the utility Directory.
const isLeap = require('./utility/leapYear');
const CustomDate = require('./customDate');
const EthiopianCalendar = require('./ethioCalendar')

class CalculateDate {
    constructor(date){
        // date to be converted to Ethiopian calender
        this.date = date;
        this.isLeap = isLeap.isLeapYear(this.date.getFullYear())
        this.customDate = new CustomDate();
        this.ethiopianDate = new EthiopianCalendar();
        // Number of days in Ethiopian month.
        this.DAY_IN_ETHIO_MONTH = 30
    }

calculate(){
this._gregNewYear();
this._ethioNewYear();
this._currentDate();


return this.ethiopianDate;
}


    // returns the difference of year between Ethiopian 
    // and Gregorian calender based on the current month.
    _yearDifference(month){
return month > 8 ? 7: 8;
    }




    // to find the gregorian year in which current 
    // ethiopian year is started.
    _gregNewYear(){

//* date at which MESKEREM 1 would be. 
//* it deepends on wether its leap year or not.
/// NOTE:
// Ethiopian new year is alaways Either  at SEPTEMBER 11 or SEPTEMBER 12;
const leapSep = 12;
const notLeapSep = 11;
// THE MONTH IS 9.  Because september is the ninth month in Gregorian Calendar.
const month = 9;
let sepDate ;

// getting current year
let year = this.date.getFullYear();

//! find the year difference
const yearDiff = this._yearDifference(this.date.getMonth());

if (yearDiff === 8){
    sepDate = this.isLeap ? leapSep : notLeapSep;
    year--;
}
else if(yearDiff === 7){
    // to decide how gonna calculate the current year 
    // we have to use  to check the leapness of the next year if 
    // the year difference is lessthan 8 or if its 7.
    let tempYear = year + 1;
    sepDate = isLeap(tempYear) ? leapSep : notLeapSep;
}

this.customDate.day = sepDate;
this.customDate.month = month;
this.customDate.year = year;

// return this.customDate;
    
    }

    _ethioNewYear(){
        const yearDiff = this._yearDifference(this.date.getMonth());
        const ethioYear = this.date.getFullYear() - yearDiff;
        // the day and month is one because we are focusing in the first day on the year.
        const ethioMonth = 1;
        const ethioDay = 1;

        this.ethiopianDate.year = ethioYear;
        this.ethiopianDate.month = ethioMonth;
        this.ethiopianDate.day = ethioDay;

    }


    _dayDifference(){
        return this.date.getDate() + this._monthToDay(this.date.getMonth());
    }


    _monthToDay(month){
        // Day Length in gorgerian calendar starting from [september to August]
const dayInMonth = [30 , 31 ,30 ,31,31 ,28 ,31 ,30 ,31 ,30,31 ,31]
// date relation this will be used to convert the month line as the one that match Ethiopain calendar month arrangement 

/*
THIS ACTUALLY MEANS THAT.when the   THE GORGERIAN CALENDAR starts its first month.... 
In Ethiopian calendar it will be the 5 th month. so its arranged in that manner.
*/
const gorgeToEthiopMonth = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]

// const monthInWord = ["sep", "oct", "nov", "dec", "jan", "feb",
// "march", "april", "may", "june", "july", "august"]

let totalDays=0;
let newMonth = gorgeToEthiopMonth[month-1]
// Used for calculating the number of days from the MESKEREM 1 to the current day.
for(let i=1;i<newMonth;i++){
    // console.log(monthInWord[i], i,dayInMonth[i])
    if(i===5 && this.isLeap){
      totalDays +=dayInMonth[i]+1;
    }
    else{ 
        totalDays +=dayInMonth[i];
    }
}
return totalDays;


    }


_currentDate(){

    
    const leftSeptember =  30-this.customDate.day;
    let dayDiff = this._dayDifference() + leftSeptember;
    const leftDay  = this._leftDay(dayDiff);
    const leftMonth = this._leftMonth(dayDiff);

    if(!(leftMonth === 12 )){
        this.ethiopianDate.month += leftMonth;

        this.ethiopianDate.day += leftDay;
    }
    
    else{
        this._pagume(leftDay,leftMonth)
    }

}



_pagume(leftDay,leftMonth){

    if(leftDay > 5){

        let customDay = leftDay - 5;
        this.ethiopianDate.year++;

        if(this.isLeap){
            customDay ++;
this.ethiopianDate.day = customDay;
        }
        else{
            this.ethiopianDate.day = customDay;
        }
    }

      else{
        if(!this.isLeap){
            this.ethiopianDate.month += leftMonth;
            this.ethiopianDate.day += leftDay;
        }
        else{
            this.ethiopianDate.year++;
        }
     }

}


_leftMonth(dayDiff){
    return parseInt(dayDiff / this.DAY_IN_ETHIO_MONTH);
}
_leftDay(dayDiff){
    return parseInt(dayDiff % this.DAY_IN_ETHIO_MONTH);
}




}

module.exports = CalculateDate;

// let date = new Date()

// const check = new CalculateDate(date);
// console.log(check.calculate());