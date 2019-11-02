function cariMedian(arr) {
    // you can only write your code here!
    arr = arr.sort(function(a, b){return a-b});
    var index = Math.round(arr.length/2)-1;
    
    return arr.length%2===0 ? (arr[index] + arr[index+1]) / 2 : arr[index];
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5