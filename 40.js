/*
40. 檢查方形是否有重疊的部份
輸入兩個陣列 / 列表代表兩個平面座標上的方形區塊，格式為 [x, y, w, h]，其中 x 和 y 為整數，代表方形區塊左上角的座標點；w 和 h 為正整數，代表往右下方延伸的寬度和高度。

你的函式能判斷兩個方形區塊是否有重疊的部份，若有，回傳真；否則，回傳假。其中，邊線剛好碰到的情況也算是重疊。

平面座標定義：X 軸往右是正數、往左是負數；Y 軸往上是正數、往下是負數。

輸入範例：
方形一：[0, 0, 10, 10]
方形二：[-5, 5, 5, 5]
回傳：真

輸入範例：
方形一：[10, 0, 10, 5]
方形二：[30, 5, 10, 5]
回傳：假

輸入範例：
方形一：[-5, -5, 20, 10]
方形二：[0, -10, 5, 5]
回傳：真

    @param rect1:{[Integer]}
    @param rect2:{[Integer]}
    @return :{Boolean}
*/

function getRange(start, target) {
  return [start, start + target];
}

function isOverlapping(rect1, rect2) {
  const rect1RangeX = getRange(rect1[0], rect1[2]);
  const rect1RangeY = getRange(rect1[1], rect1[3]);

  return [rect1RangeX, rect1RangeY];
}

console.log(isOverlapping([0, 0, 10, 10], [-5, 5, 5, 5]));
// console.log(isOverlapping())
// console.log(isOverlapping())
