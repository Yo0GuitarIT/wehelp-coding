/*
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
