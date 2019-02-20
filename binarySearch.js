// Write a function that accepts a sorted array and a value
function binarySearch(arr, num) {
    // Create a left pointer at the start of the array and a right pointer at the end of the array
    let start = 0;
    let end = arr.length - 1;
    // Create a pointer in the middle
    let middle = Math.floor((start + end) / 2);
    console.log(start, end, middle)
// While the left pointer comes before the right pointer
while (arr[middle] !== num && start <= end) {
    // If you find the value want return the index
    if (num < middle) {
        end = middle - 1;
    } else {
        start = middle + 1
    }
    // If the value is too small move the left pointer up
    // If the value if to high move the right pointer down
    middle = Math.floor((start + end) / 2)
}
    // If we never find the value return -1
    return arr[middle] === num ? middle : -1
    
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 100))