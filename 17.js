/*
    @param n:{Integer}
    @return :{Boolean}
*/
function checkPrime(n) {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(75));
