/*
36. 找出不一樣的資料
輸入一個至少有三筆資料的整數陣列 / 列表，其中包含唯一一個和其他所有資料不同的整數。你的函式能找出並回傳這個整數所在的索引位置。

輸入範例：[5, 5, 0]
回傳：2

輸入範例：[1, 2, 1, 1, 1]
回傳：1

輸入範例：[-5, 8, 8, 8]
回傳：0

    @param ns:{[Integer]}
    @return :{Integer}
*/
function findUnique(ns) {
  let stat = {};

  ns.forEach((element) => {
    stat[element] = (stat[element] || 0) + 1;
  })

  const uniqueOne = Object.values(stat).find(value => value === 1)
  const uniqueKey = parseInt(Object.keys(stat).find(key => stat[key] === uniqueOne));
  

  for (let i = 0; i < ns.length; i++) {
    if (ns[i] === uniqueKey) {
      return i;
    }
  }
}


console.log(findUnique([5, 5, 0]));
console.log(findUnique([1, 2, 1, 1, 1]));
console.log(findUnique([-5, 8, 8, 8]));
