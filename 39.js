/*
39. 去除重複的資料
輸入一個整數陣列 / 列表，其中包含的整數在 -20 ~ 20 之間，你的函式能夠去除重複出現的整數，只保留最前面 ( 最小索引 ) 的資料，回傳去除重複資料後的陣列 / 列表。

輸入範例：[3, 2, -6, 2, 3, 5, 2]
回傳：[3, 2, -6, 5]

輸入範例：[0, 0, 0, 0]
回傳：[0]

輸入範例：[1, -3, -5, 2, -5, 1]
回傳：[1, -3, -5, 2]

    @param ns:{[Integer]}
    @return :{[Integer]}
*/
function removeDuplicates(ns) {
  let data = [];

  ns.forEach((element) => {
    let duplicate = false;
    data.forEach((item) => {
      if (element === item) {
        duplicate = true;
      }
    });

    if (duplicate === false) {
      data.push(element);
    }
  });

  return data;
}

console.log(removeDuplicates([3, 2, -6, 2, 3, 5, 2]));
console.log(removeDuplicates([0, 0, 0, 0]));
console.log(removeDuplicates([1, -3, -5, 2, -5, 1]));
