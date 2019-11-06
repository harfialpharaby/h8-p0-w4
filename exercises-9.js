function checkAB(num) {
    // you can only write your code here!
    for (let i = 0; i < num.length; i++) {
        if(num[i] === 'a' || num[i] === 'b'){
            for (let j = i+3; j < num.length; j+=3) {
                if((num[i] === 'a' && num[j+1] === 'b') || (num[i] === 'b' && num[j+1] === 'a')){                    
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