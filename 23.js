/*
23. 總秒數轉換為日、時、分、秒
輸入一個非負整數代表一段時間的總秒數，請將這個總秒數轉換為：日、時、分、秒，四個欄位，按照順序用陣列 / 列表的格式輸出。

輸入範例：0
回傳：[0, 0, 0, 0]

輸入範例：65
回傳：[0, 0, 1, 5]

輸入範例：7500
回傳：[0, 2, 5, 0]

輸入範例：100000
回傳：[1, 3, 46, 40]

    @param sec:{Integer}
    @return :{[Integer]}
*/

function convertSeconds(sec) {
  const seconds = sec % 60;
  const minutes = Math.floor(sec / 60) % 60;
  const hours = Math.floor(sec / 3600) % 24;
  const days = Math.floor(sec / 86400);

  return [days, hours, minutes, seconds];
}

console.log(convertSeconds(0));
console.log(convertSeconds(65));
console.log(convertSeconds(7500));
console.log(convertSeconds(10000));
