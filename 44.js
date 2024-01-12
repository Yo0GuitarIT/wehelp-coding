/*
44. 費式數列的第 N 個數
輸入一個非負整數 N，你的函式能取得費式數列中的第 N 個整數並回傳。費式數列定義如下：

第 0 個數 = 1
第 1 個數 = 1
第 N 個數 = 第 N-1 個數 + 第 N-2 個數
根據以上定義，得到 1、1、2、3、5、8、13、21、34、55 以此類推，即費式數列 / 。( Fibonacci Sequence )

輸入範例：0
回傳：1

輸入範例：4
回傳：5

輸入範例：9
回傳：55

注意事項：
你必須實作一個時間複雜度為 O(N) 的演算法，否則將會因執行逾時而失敗。

    @param n:{Integer}
    @return :{Integer}
*/
function getFibNumber(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  fib = [1, 1];
  
  for (let i = 2; i <= n; i++) { 
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n ];
}

console.log(getFibNumber(0));
console.log(getFibNumber(4));
console.log(getFibNumber(9));
