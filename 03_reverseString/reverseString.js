const reverseString = function(theStr) {
    strArr = theStr.split('')
    revArr = strArr.reverse()
    revStr = revArr.join('')

    return revStr
};

// Do not edit below this line
module.exports = reverseString;
