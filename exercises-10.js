function changeMe(arr) {
    // you can only write your code here!
    var detail = ['firstName', 'lastName', 'gender', 'age'];
    var tempRes = {};
    var yearNow = new Date().getFullYear();
    for (let i = 0; i < arr.length; i++) {        
        for (let j = 0; j < detail.length; j++) {
            if (j === 3) {
                tempRes[detail[j]] = arr[i][3] === undefined || arr[i][3] > yearNow ? 'Invalid Birth Year' : yearNow-arr[i][j];
            } else {
                tempRes[detail[j]] = arr[i][j];
            }
        }
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`);
        console.log(tempRes);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""