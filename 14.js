/*
14. 整數陣列 / 列表中，兩兩相乘的最大值
輸入一個至少包含兩個整數的陣列 / 列表，其中可能包含重複的數字if，你的函式能算出並回傳兩兩數字相乘後最大的乘積。

輸入範例一：[2, -1, 0]
回傳：0

輸入範例二：[-2, -10, 1, 2]
回傳：20

輸入範例一：[3, 1, 9, 4, 5]
回傳：45

    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMaxProduct(nums) {
  const numSorted = [...nums].sort((a, b) => a - b);
  console.log(numSorted);

  const maxPosValue =
    numSorted[numSorted.length - 1] * numSorted[numSorted.length - 2];

  const maxNegValue = numSorted[0] * numSorted[1];

  if (maxPosValue > maxNegValue) {
    return maxPosValue;
  }
  return maxNegValue;
}

console.log(findMaxProduct([2, -1, 0]));
console.log(findMaxProduct([-2, -10, 1, 2]));
console.log(findMaxProduct([3, 1, 9, 4, 5]));
