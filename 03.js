/*
3. 找到最大的整數
輸入包含至少一個整數的陣列 / 列表，找到並回傳其中最大的整數。

輸入範例一：[1, 3, 3, 2, 5, -2]
回傳：5

輸入範例二：[-5, -10, -8, -1, -2]
回傳：-1

輸入範例一：[0, 2, 2]
回傳：2

@param nums:{[Integer]}
@return :{Integer}
*/

function findMax(nums) {
  //   let max = nums[0];
  //   nums.forEach((num) => {
  //     if (max < num) {
  //       max = num;
  //     }
  //   });
  //   return max;

  return Math.max(...nums);
}

console.log(findMax([1, 3, 3, 2, 5, -2]));
console.log(findMax([-5, -10, -8, -1, -2]));
console.log(findMax([0, 2, 2]));
