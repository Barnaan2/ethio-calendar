//====Method to test whether the year is leap or not===
  exports.isLeapYear = (year) =>{
   let modules = year % 4
   return modules === 0 ? true:false  
  }
 //! Fix ME :( !  write me in tests directory 
  // console.log(isLeapYear(2012))
  // console.log(isLeapYear(2014))
