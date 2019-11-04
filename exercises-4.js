function cariModus(arr) {
    // you can only write your code here!
    var temp = {};
    var modus = 0;
    var nilaiModus, countOne = 0;
    
    for (let i = 0; i < arr.length; i++) {
        temp[arr[i]] === undefined ? temp[arr[i]] = 1 : temp[arr[i]]++;
    }
    
    for (const key in temp) {
        if (temp[key] === 1) {
            countOne++;
        }
        if (modus < temp[key]) {
            modus = temp[key];
            nilaiModus = key;
        }
    }
    
    return modus === arr.length || countOne === arr.length ? -1 : nilaiModus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1