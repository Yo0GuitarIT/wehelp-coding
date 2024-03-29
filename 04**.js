/*
4. 找到第二大的整數
輸入包含至少兩個不同整數的陣列 / 列表，找到並回傳其中第二大的整數。

輸入範例一：[1, 3, 3, 2, 5, -2]
回傳：3

輸入範例二：[-5, -10, -8, 1, -1]
回傳：-1

輸入範例一：[0, 2]
回傳：0

    @param nums:{[Integer]}
    @return :{Integer}
*/
function findSecond(nums) {
  let newList = [];
  let sortedNums = nums.sort((a, b) => a - b);

  sortedNums.forEach(element => {
    let count = (sortedNums.filter(event => event === element)).length;
    if (count > 1) {
      sortedNums.splice(sortedNums.indexOf(element), 1);
    }
  })

  sortedNums.forEach((element) => {
    newList.push(element);
  });

  return newList[newList.length - 2];
}

console.log(findSecond([1, 3, 3, 2, 5, -2]));
console.log(findSecond([-5, -10, -8, 1, -1]));
console.log(findSecond([0, 2]));
