/*
5. 找到最大公因數
輸入兩個正整數，你的函式能找到並回傳這兩個正整數的最大公因數。

輸入範例一：6 和 4
回傳：2

輸入範例二：5 和 16
回傳：1

輸入範例一：12 和 6
回傳：6

@param n1:{Integer}
@param n2:{Integer}
@return :{Boolean}
*/

// function findGCD(n1, n2) {
//   let GCD = null;
//   n1 > n2 ? (GCD = n2) : (GCD = n1);
//   while (true) {
//     if (n1 % GCD === 0 && n2 % GCD === 0) {
//       return GCD;
//     }
//     GCD -= 1;
//   }
// }

function findGCD(n1, n2) {
  let smallerNumber = Math.min(n1, n2);
  for (let i = 1; i <= smallerNumber; i++) {
    if (n1 % smallerNumber === 0 && n2 % smallerNumber === 0) {
      return smallerNumber;
    }
  }
    return 1;
}

console.log(findGCD(6, 4));
console.log(findGCD(5, 16));
console.log(findGCD(12, 6));
