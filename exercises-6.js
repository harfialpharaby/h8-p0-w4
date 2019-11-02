function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = {};
    for (let i = 1; i <= angka; i++) {
        if(angka % i === 0){
            temp[i] = angka/i;
        }
    }

    return temp;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2