const { expect } = require('chai');
const EthioDate = require('./../src/ethioDate'); 
const isLeap = require('./../src/utility/leapYear');


// let date = new Date("2027-9-30")
// const EthiopianDate = new EthioDate({
//     lang:"Am",date
// });


describe('EthioCalendar', () => {
    it('should correctly calculate the Ethiopian month for a Gregorian date', () => {
        let dates = new Date("2023-09-12")
        const ethioDate = new EthioDate("Am",dates );
        const currentDate = ethioDate.now();
        console.log(currentDate.month)
      // it should return the first month 
      expect(currentDate.month).to.equal(1);
    });
  
    it('should handle leap years correctly', () => {
      
      const isLeapYear = isLeap.isLeapYear(2024); // Leap year
      expect(isLeapYear).to.be.true;
    });
    

  });
  
