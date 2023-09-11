const EthioDate = require('./ethioDate')

const date = new EthioDate({
    lang:"Am"
});

// Unknown error it says that date.lang() is not a function .
console.log(date.now());
console.log(date.humanizedDate());