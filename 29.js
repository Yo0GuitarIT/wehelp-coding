/*
29. 撲克牌比點數、花色大小
假設在一個撲克牌遊戲中，點數由小到大的排序是 2、3、4、...、10、J、Q、K、A。若點數相同，則考慮花色，花色由小到大的排序是 C ( 梅花 )、D ( 方塊 )、H ( 紅心 )、S ( 黑桃 )。

輸入兩個字串，依序代表兩張撲克牌的點數和花色，你的函式可以判斷是否第一張比第二張大，若是，回傳真；否則，回傳假。

輸入範例："KC"、"3H"
回傳：真

輸入範例："JS"、"QS"
回傳：假

輸入範例："2S"、"2D"
回傳：真

輸入範例："10C"、"10H"
回傳：假

    @param c1:{String}
    @param c2:{String}
    @return :{Boolean}
*/

const sliceCard = (card) => {
  let point = card.slice(0, -1);
  switch (point) {
    case "J":
      point = 11;
      break;

    case "Q":
      point = 12;
      break;

    case "K":
      point = 13;
      break;

    case "A":
      point = 14;
      break;

    default:
      point = parseInt(point);
      break;
  }

  let color = card.slice(-1);
  switch (color) {
    case "C":
      color = 1;
      break;

    case "D":
      color = 2;
      break;

    case "H":
      color = 3;
      break;

    case "S":
      color = 4;
      break;

    default:
      break;
  }

  return [point, color];
};

function comparePokerCard(c1, c2) {
  const a1 = sliceCard(c1);
  const a2 = sliceCard(c2);

  
  if (a1[0] > a2[0]) {
    return true;
  }
  if (a1[0] === a2[0] && a1[1] > a2[1]) {
    return true;
  }

  return false;
}

console.log(comparePokerCard("KC", "3H"));
console.log(comparePokerCard("JS", "QS"));
console.log(comparePokerCard("2S", "2D"));
console.log(comparePokerCard("10C", "10H"));
