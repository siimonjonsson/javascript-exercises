const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let counter = 0; counter < times; counter ++) {
        string += word;
    }
        return string;
};

// Do not edit below this line
module.exports = repeatString;
