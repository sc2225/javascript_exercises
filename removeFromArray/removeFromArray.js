const removeFromArray = function(arr) {

    //NOTE: Arguments.length takes into account ALL arguments/parameters in the parantheses

    //use array.indexOf("X") to find position of a value in the array
    //Use arr.splice(index, #toRemove) to remove the value

   

    //To determine if multiple optional arguments are present, get the number of optional arguments
    //and loop through them

    if (arguments.length - 1 > 0) {
        for (argCounter = 1; argCounter <= (arguments.length - 1); argCounter++) {
            let value = arguments[argCounter];

            let itemFound = arr.indexOf(value);
            if (itemFound != -1) {
                arr.splice(itemFound, 1);
            }
            
        }
    }

    return arr;

}

console.log(removeFromArray([1,2,3,4], 2));
module.exports = removeFromArray
