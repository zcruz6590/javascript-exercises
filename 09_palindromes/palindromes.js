const palindromes = function (strText) {
    // Clean string text to only have alphanumeric characters
    const newText = Array.from(strText)
                       .filter(char => /[a-z0-9]/i.test(char))
                       .join('')
                       .toLowerCase();
    
    // Reverse new text
    const revText = Array.from(newText)
                       .reverse() 
                       .join('');
    
    // Test if Palindrome 
    return newText === revText;
};

// Do not edit below this line
module.exports = palindromes;


