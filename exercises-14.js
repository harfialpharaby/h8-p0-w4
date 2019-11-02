function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var detail = ['penumpang', 'naikDari', 'tujuan', 'bayar'];
    var res = [];
    var temp;
    
    for (let i = 0; i < arrPenumpang.length; i++) {
        temp = {};
        for (let j = 0; j < detail.length; j++) {
            temp[detail[j]] = j < detail.length-1 ? arrPenumpang[i][j] : (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000;
        }
        res.push(temp);
    }

    return res;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]