
# Ethiopian Calendar
A date converter from Gregorian calendar to Ethiopian calendar with additional functionalities such as  months in different local languages.


## Installation

Install Ethiopian calendar package with npm

```bash
  npm install eth-calendar
```
    
## Usage


Provide examples and explanations to help users understand how to use your package effectively. Consider different scenarios and use cases.

### Getting Started

To get started with Ethiopian Calendar, you'll need to install it first. If you haven't already, follow the installation instructions in the [Installation](#installation) section.

### Basic Usage

Here's a simple example of how to use Ethiopian Calendar in your JavaScript code:

```javascript
const EthioDate = require('eth-calendar');

const date = new Date("2023-10-24")
const ethioDate = new EthioDate('amh',dates);
console.log(date.humanizedDate());
<!-- this will return a string  look like this :
ጥቅምት 13 2016
-->

// Your code here
```

## API Reference

#### EthioDate class methods.

#### humanizedDate()

called in instance of EthioDate object. it returns string with humanized version . a month name with choosen language.

``` 
<!-- it will return a date string like this . (here the language is 'amh') -->
ጥቅምት 13 2016
 ```

## now()
 Get the current Ethiopian date.
```
const EthioDate = require('eth-calendar');
const date = new EthioDate();
console.log(date.now()); 
<!-- it will return an EthioDate object like this:
EthiopianCalendar { day: 11, month: 2, year: 2016 } -->
```
## getMonth()
Get the Ethiopian month (as an integer).

## getDay()
Get the Ethiopian day of the month (as an integer).

## Supported Languages for Month Translation

Ethiopian Calendar supports the translation of months into various Ethiopain languages. You can contribute by translating the months into your preferred language. Here is a list of the currently supported languages:

- Amaharic (amh)
- Afaan Oromo (oro)
- Tigrigna (tig)

## Usage of local Languages
to use the local language pass it as parameter in the class of EthioDate while creating the object of it. pass the code name of the language.
```
// it would be 'oro' for afaan oromo and so on.
const ethioDate = new EthioDate('amh',dates);
```

### How to Contribute a Translation

If you'd like to contribute a translation for your language, follow these steps:

1. Fork the repository.
2. Create a new file in the `translations` directory with a name that corresponds to your language code (e.g., `translations/som.json` for somali).
3. Add the translated month names to the file in the following format:
   ```
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
        
        ```
  

## License

[MIT](https://choosealicense.com/licenses/mit/)

## 🚀 About Me

I'm Bernabas TekKalign, a passionate software engineer with over 3 years of experience. My journey in the world of software development has been an exciting adventure of learning, creating, and innovating. I'm dedicated to building robust and efficient software solutions that make a real impact.

🔗 Explore more of my work on [GitHub](https://github.com/Barnaan2)

🌐 Connect with me on [LinkedIn](https://www.linkedin.com/in/bernabas-tekkalign-4b1116232/)

📝 Read my tech articles on [Medium](https://medium.com/@barnaantekalign)


