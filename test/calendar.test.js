const { expect } = require('chai');
const EthioDate = require('./../src/ethioDate'); 
const isLeap = require('./../src/utility/leapYear');

//* write all of the test cases.



//*

describe('EthioCalendar', () => {
    let dates = new Date("2023-09-12")
    const ethioDate = new EthioDate("amh",dates );
    const currentDate = ethioDate.now();

    it('Should correctly calculate the Ethiopian year for a Gregorian date',()=>{

        // it should return the year 2016.
        expect(currentDate.year).to.equal(2016)
      })

    it('should correctly calculate the Ethiopian month for a Gregorian date', () => {
      // it should return the first month 
      expect(currentDate.month).to.equal(1);
    });

    it('Should correctly calculate the Ethiopian day for a Gregorian date',()=>{

      // it should return the first day
      expect(currentDate.day).to.equal(1)
    })
  
    it('should handle leap years correctly', () => {
      
      const isLeapYear = isLeap.isLeapYear(2016); // Leap year
      expect(isLeapYear).to.be.true;
    });
    

  });
  
