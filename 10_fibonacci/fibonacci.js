const fibonacci = function(num) {
    //Fibonacci Array
    let fibArray = [0, 1] 

    //Checks for 0 and negative conditions
    if (num < 0) {return 'OOPS'} 
    if (num == 0) {return fibArray.shift()}

    //Fibonacci sequence
    for (let i = 0; fibArray.length <= num; i++) {
        let sum = fibArray[i] + fibArray[i+1]
        fibArray.push(sum)
    } fibArray.shift()
    return fibArray.pop() //return the fibonacci array
};

// Do not edit below this line
module.exports = fibonacci;
