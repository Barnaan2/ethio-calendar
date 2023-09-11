// Add language with is month name.

/**
 * A module for converting between the Ethiopian and Gregorian calendars.
 *
 * @module ethio-calendar
 */

/**
 * Json file for representing languages supported.
 */

const languages = {
    // language have a month and the month will be provided in the short and long length. then the option will be available.
    
        "amh": {
          "fullLength": [
            "መስከረም", "ጥቅምት", "ህዳር", "ታኅሣሥ", "ጥር",
            "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ",
            "ኃምሌ", "ነሐሴ", "ጳጉሜ"
          ],
          "shorter": [
            "መስከ", "ጥቅም", "ህዳር", "ታኅሣ", "ጥር",
            "የካቲ", "መጋቢ", "ሚያዝ", "ግንቦ", "ሰኔ",
            "ኃምሌ", "ነሐሴ", "ጳጉሜ"
          ]
        }
      
,      

    "oro":{
        "fullLength":[
            "Fuulbana","Onkololeessa","Sadaasa","Muddee"," Amajjii",
            "Guraandhala","Bitooteessa","Elba","Caamsa",
            "Waxabajjii","Adooleessa","Hagayya","Qaammee"
        ],
        "shorter":[
            "Fuulbana","Onkololeessa","Sadaasa","Muddee"," Amajjii",
            "Guraandhala","Bitooteessa","Elba","Caamsa",
            "Waxabajjii","Adooleessa","Hagayya","Qaammee"
        ]
    }
    ,
        "tig": {
          "fullLength": [
            "መስከረም", "ጥቅምቲ", "ህዳር", "ታኅሣሥ", "ጥሪ",
            "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ",
            "ነሐሴ", "ጳጉሜ", "ጥምቀት"
          ],
          "shorter": [
            "መስከ", "ጥቅም", "ህዳር", "ታኅሣ", "ጥሪ",
            "የካቲ", "መጋቢ", "ሚያዝ", "ግንቦ", "ሰኔ",
            "ነሐሴ", "ጳጉሜ", "ጥምቀት"
          ]
        }
      
      
}

module.exports = languages;