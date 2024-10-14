const removeFromArray = function(arr, ...elements) {
    
    //filters each item in arr such that the item is not included in ...elements
    //basically returns all the items in the array that are not present in ...elements
    return arr.filter(item => !elements.includes(item))
    
};
 
// Do not edit below this line
module.exports = removeFromArray;

