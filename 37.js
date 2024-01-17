/*
37. 找出眾數
輸入一個非負整數陣列 / 列表，其中包含的非負整數在 0 ~ 20 之間，找出並回傳其中的眾數：即出現次數最多的整數值。

你可以假設不會同時有多個眾數出現。

輸入範例：[1, 2, 1, 3, 1]
回傳：1

輸入範例：[6, 0, 8, 8, 10]
回傳：8

輸入範例：[0, 2, 0, 1, 1, 20, 0]
回傳：0

    @param ns:{[Integer]}
    @return :{Integer}
*/

// function findMode(ns) {
//   let statistics = {}; // 創建空物件用於統計數字出現的次數

//   // 使用 forEach 迭代陣列，統計每個元素出現的次數
//   ns.forEach((nsElement) => {
//     // 如果物件中已經存在這個元素，則次數加一；否則創建並設為 1
//     statistics[nsElement] = (statistics[nsElement] || 0) + 1;
//   });

//   //找出出現次數最多的元素
//   const maxValue = Math.max(...Object.values(statistics));
//   // 找到對應最大值的元素
//   const maxKey = parseInt(
//     Object.keys(statistics).find((key) => statistics[key] === maxValue)
//   );

//   return maxKey;
// }

/*----------------------------------------------------------------*/

function findMode(ns) {
  // 使用 reduce 統計數字出現的次數
  const nsReducer = ns.reduce((accumulator, currentValue) => {
    // 如果物件中已經存在這個元素，則次數加一；否則創建並設為 1
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  }, {});

  // 找到出現次數最多的元素
  const maxValue = Math.max(...Object.values(nsReducer));

  // 取得所有出現次數的元素的鍵
  const keys = Object.keys(nsReducer);

  // 找到其中一個出現次數最多的元素
  const mode = keys.find((element) => nsReducer[element] === maxValue);

  // 回傳出現次數最多的元素（轉為整數）
  return parseInt(mode);
}

console.log(findMode([1, 2, 1, 3, 1]));
console.log(findMode([6, 0, 8, 8, 10]));
console.log(findMode([0, 2, 0, 1, 1, 20, 0]));
