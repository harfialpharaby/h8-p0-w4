function ubahHuruf(kata) {
    // you can only write your code here!
    var alfabet = 'abcdefghijklmnopqrstuvwxyz';
    var res = ''

    for (let i = 0; i < kata.length; i++) {
        res += alfabet[(alfabet.indexOf(kata[i]) + 1) % 26];
    }

    return res;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu