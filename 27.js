/*
27. 檢查兩個區間是否重疊
輸入兩個陣列 / 列表，分別代表兩個整數區間的最小值和最大值 [min1, max1] 和 [min2, max2]，你的函式能判斷兩個整數區間是否重疊，包含最小或最大值落在同一個整數的狀況。

可以假設每個區間的最大值一定大於最小值。

輸入範例：[5, 10]，[9, 11]
回傳：真

輸入範例：[-5, 5]，[8, 10]
回傳：假

輸入範例：[-5, 5]，[-6, -5]
回傳：真

    @param range1:{[Integer]}
    @param range2:{[Integer]}
    @return :{Boolean}
*/

function getRange(range) {
  let result = [];
  for (let i = range[0]; i <= range[1]; i++) {
    result.push(i);
  }
  
  return result;
}

function isOverlapping(range1, range2) {
  const rangeResult1 = getRange(range1);
  const rangeResult2 = getRange(range2);

  return rangeResult1.some((element1) => rangeResult2.includes(element1));
}

console.log(isOverlapping([5, 10], [9, 11]));
console.log(isOverlapping([-5, 5], [8, 10]));
console.log(isOverlapping([-5, 5], [-6, -5]));
