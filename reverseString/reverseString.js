const reverseString = function(word) {
    //use str.split("") to split chars into array
    let wordArray= word.split(" ");
    
    let results = "";

    for (x = wordArray.length - 1; x >= 0; x--) {

        let staging = wordArray[x].split("");
        // let charArray = [];
        //  charArray = charArray.concat(staging);
       
        if (x != (wordArray.length-1) && (wordArray.length > 1)) {
            staging.push(" ");
        }

        for (incr = staging.length - 1; incr >= 0; incr--) {
            results += staging[incr];
         }
        
    }

    return results;
}

console.log(reverseString("hello there"));

module.exports = reverseString
