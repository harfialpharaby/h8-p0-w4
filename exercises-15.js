function highestScore(students) {
  // Code disini

  var res = {};
  for (let i = 0; i < students.length; i++) {
    // untuk inisialisasi awal jika key tidak ada di object res
    if (!(students[i].class in res)) {
      res[students[i].class] = {};
      res[students[i].class].name = students[i].name;
      res[students[i].class].score = students[i].score;
    // jika sudah ada key di res maka ubah data nama dan score dengan yg lebih besar
    } else if (students[i].score > res[students[i].class].score) {
      res[students[i].class].name = students[i].name;
      res[students[i].class].score = students[i].score;
    }
  }

  return res;
}

// TEST CASE
console.log(highestScore([{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}