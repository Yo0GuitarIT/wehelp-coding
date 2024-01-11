/*
46. 十二生肖查詢
輸入一個正整數表示西元年份，你的函式回傳該年份所屬的生肖動物名稱。請參考以下規則：

已知西元 1912 年為「鼠」年，十二生肖依序為「鼠」、「牛」、「虎」、「兔」、「龍」、「蛇」、「馬」、「羊」、「猴」、「雞」、「狗」、「豬」。

輸入範例：1912
回傳："鼠"

輸入範例：1946
回傳："狗"

輸入範例：1855
回傳："兔"

輸入範例：2024
回傳："龍"

    @param year:{Integer}
    @return :{String}
*/
function getChineseZodiac(year) {
  const zodiacs = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];
  const reverseZodiacs = zodiacs.slice().reverse();
  const order = (year - 1912) % 12;
  if (order < 0) {
    return reverseZodiacs[order * (-1) - 1];
  }
  return zodiacs[order];
}

console.log(getChineseZodiac(1912));
console.log(getChineseZodiac(1946));
console.log(getChineseZodiac(1855));
console.log(getChineseZodiac(2024));
