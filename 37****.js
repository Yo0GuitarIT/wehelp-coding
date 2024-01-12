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
function findMode(ns) {
  let statistics = {};

  ns.forEach((nsElement) => {
    statistics[nsElement] = (statistics[nsElement] || 0) + 1;
  });

  const maxValue = Math.max(...Object.values(statistics));
  const maxKey = parseInt(Object.keys(statistics).find(key => statistics[key] === maxValue));

  return maxKey;
}


console.log(findMode([1, 2, 1, 3, 1]));
console.log(findMode([6, 0, 8, 8, 10]));
console.log(findMode([0, 2, 0, 1, 1, 20, 0]));
