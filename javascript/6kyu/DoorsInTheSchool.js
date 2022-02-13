// Под вечер приходят не самые лучшие решения, я разочарован в себе

function doors(n){
  theDoors = [];

  for (let i = 0; i < n; i++) theDoors[i] = false;

  for (let student = 1; student <= n; student++) {
    for (let i = student; i <= theDoors.length; i += student) {
      theDoors[i-1] = !theDoors[i-1];
    }
  }

  return theDoors.reduce((acc, cur) => acc + +cur);
}

console.log(doors(5));
console.log(doors(10));
console.log(doors(100));
