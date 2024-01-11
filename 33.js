/*
33. 計算 X 的 Y 次方
輸入兩個整數 X 和 Y，計算並回傳 X 的 Y 次方計算結果。

其中 X 介於 -30 ~ 30 之間，Y 介於 0 ~ 10 之間。

輸入範例：3、4
回傳：81

輸入範例：-5、0
回傳：1

輸入範例：-10、3
回傳：-1000

    @param x:{Integer}
    @param y:{Integer}
    @return :{Integer}
*/
function power(x, y) {
  return Math.pow(x, y);
}

console.log(power(3, 4));
console.log(power(-5, 0));
console.log(power(-10, 3));
