function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var sedikit;
    for (let i = 1; i <= Math.sqrt(angka); i++) {
        if (angka%i===0 && (sedikit === undefined || sedikit > String(angka/i).length+String(i).length)) {
            sedikit = String(angka/i).length+String(i).length;
        }
    }

    return sedikit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2