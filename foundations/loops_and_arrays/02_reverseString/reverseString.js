const reverseString = function(word) {
    let reserved = "";
    for (let i = word.length -1; i >= 0; i--) {
        reserved = reserved + word[i];
    }
    return reserved;
};

// Do not edit below this line
module.exports = reverseString;
