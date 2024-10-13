const repeatString = function(word, num) {
    let myStr = ''
    
    if (num < 0) {
        return 'ERROR'
    } else {
        if (num > 0) {
            for(let rep = 1; rep <= num; rep++) {
                myStr = myStr + word
            }
        }   return myStr
    }
}
// Do not edit below this line
module.exports = repeatString;