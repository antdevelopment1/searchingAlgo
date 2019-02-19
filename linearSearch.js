// O(N) Time Complexity
function linear(arr, num) {
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        // Check if the current array element is equal to the value
        if (arr[i] === num) {
            // If it is return the index at which the element is found
            return i;
        }
    }
    return -1;
}

console.log(linear([1,2,3,4,5], 1))