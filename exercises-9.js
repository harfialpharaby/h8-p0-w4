function checkAB(num) {
    // you can only write your code here!
    for (let i = 0; i < num.length; i++) {
        if(num[i] === 'a' || num[i] === 'b'){
            for (let j = i; j < num.length; j+=4) {
                if((num[i] === 'a' && num[j] === 'b') || (num[i] === 'b' && num[j] === 'a')){
                    return true;
                }
            }
        }
    }

    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false