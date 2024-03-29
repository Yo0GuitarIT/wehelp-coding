/*
31. 交換資料的位置
輸入一個包含兩個整數的陣列 / 列表，將其中的兩個整數互相交換位置，回傳交換後的陣列 / 列表。

輸入範例：[2, 4]
回傳：[4, 2]

輸入範例：[1, -5]
回傳：[-5, 1]

輸入範例：[0, 100]
回傳：[100, 0]

    @param ns:{[Integer]}
    @return :{[Integer]}
*/
function exchange(ns) {
  return ns.toReversed();
}

console.log(exchange([2, 4]));
console.log(exchange([1, -5]));
console.log(exchange([0, 100]));
