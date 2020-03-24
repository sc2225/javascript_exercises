const sumAll = function(start, end) {
    let results = 0;
    let thisStart= start;
    let thisEnd = end;

    //first check if parameters are numbers. If ONE of the para are not, then return error.

    if (typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0) {
        return 'ERROR';
    }

    if (start >= end) {
        thisStart = end;
        thisEnd = start;
    }

    while (thisStart <= thisEnd) {
    
        results += thisStart;
        thisStart++;
        
    }

    
return results;

}

module.exports = sumAll
