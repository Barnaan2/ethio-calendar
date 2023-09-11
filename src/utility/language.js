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
    "Am":{
        "fullLength":["meskerem","tikmt","wow","meskerem","tikmt"
        ,"wow","meskerem","tikmt","wow","meskerem","tikmt","wow","pagume"],
        
        "shorter":["mesk","tik","nas","haml","megab"]
    },
}

module.exports = languages;