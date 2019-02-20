// Write a function which accepts two strings of differnent lengths. 
// We want to see how may times the short word is in the longer word and return a count
// Naive Search With Nested For Loops
function naiveSearch(long,short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("hey hey there hey you hey", "hey"))
