/*
28. 撲克牌比點數大小
假設在一個撲克牌遊戲中，不考慮花色，點數由小到大的排序是 2、3、4、...、10、J、Q、K、A。

輸入兩個字串，依序代表兩張撲克牌的點數，你的函式可以判斷是否第一張比第二張大，若是，回傳真；否則，回傳假。

輸入範例："K"、"3"
回傳：真

輸入範例："J"、"Q"
回傳：假

輸入範例："2"、"A"
回傳：假

輸入範例："10"、"10"
回傳：假

    @param f1:{String}
    @param f2:{String}
    @return :{Boolean}
*/

function checkText(f) {
  switch (f) {
    case "J":
      f = 11;
      break;

    case "Q":
      f = 12;
      break;

    case "K":
      f = 13;
      break;

    case "A":
      f = 14;
      break;

    default:
      f = parseInt(f);
      break;
  }
  return f;
}

function comparePokerFigure(f1, f2) {
  return checkText(f1) > checkText(f2);
}

console.log(comparePokerFigure("K", "3"));
console.log(comparePokerFigure("J", "Q"));
console.log(comparePokerFigure("2", "A"));
console.log(comparePokerFigure("10", "10"));
