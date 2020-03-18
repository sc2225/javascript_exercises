const repeatString = function(word, num) {

    let resultString = "";

    if (num < 0) {
        return 'ERROR';
    }

    for (x = 0; x < num; x++) {
        resultString += word;
    }    
    return resultString;
}

module.exports = repeatString
