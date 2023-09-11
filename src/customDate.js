// it will be used for passing custom date objects in the whole system.
// to generate the new type of date object for using in the system.
class CustomDate{
    constructor(day=0,month=0,year=0){
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

module.exports = CustomDate;