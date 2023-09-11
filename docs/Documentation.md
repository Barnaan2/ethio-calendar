# EthioDate Class Documentation

The `EthioDate` class in the "ethio-calendar" package represents a new type of date object in the Ethiopian calendar and provides methods for humanizing it. Users can interact with this class to work with dates in the Ethiopian calendar.

## Installation

To use the "ethio-calendar" package and the `EthioDate` class, install it using npm:

```shell
npm install ethio-calendar
```

Usage
Import the EthioDate class into your

const EthioDate = require('ethio-calendar');

Creating an Instance

To create an instance of the EthioDate class, specify the desired language code and an optional Gregorian date (defaulting to the current date):

// Create an instance with the default language (Amharic) and the current date
const ethioDate = new EthioDate();

// Create an instance with a specific language code (e.g., Afaan Oromo) and a custom date
const ethioDateOromo = new EthioDate('oro', new Date(2023, 8, 11)); // September 11, 2023

Supported Languages

The EthioDate class supports the following languages:

    "amh" for Amharic
    "oro" for Afaan Oromo
    "tig" for Tigrigna

You can specify the language when creating an instance of the class.
Getting Date Information

You can retrieve various date-related information using the following methods:

    now(): Get the current Ethiopian date.
    getMonth(): Get the Ethiopian month (as an integer).
    getDay(): Get the Ethiopian day of the month (as an integer).

Humanized Date

The humanizedDate() method returns a human-readable representation of the Ethiopian date in the format "Month Day Year." For example:

const date = ethioDate.humanizedDate();
console.log(date); // Output: "መስከረም 1 2016" (assuming current date)

Error Handling

The EthioDate class includes error handling for language codes and date calculations. It ensures that the provided language code is valid.
