/*
    @param n:{Integer}
    @return :{Boolean}
*/

function checkMoney(n) {
  return n > 100 && n % 100 === 0 && n <= 100000;
}

console.log(checkMoney(30));
console.log(checkMoney(2000));
console.log(checkMoney(6150));
