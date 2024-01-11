/*
38. 檢查是否為迴文
輸入一個包含英數字的字串，你的函式能夠檢查這個字串是否為一個「迴文」，若是，回傳真；否則，回傳假。

迴文：從中間切開，左右兩邊對稱的字串。

輸入範例："abccba"
回傳：真

輸入範例：""
回傳：真

輸入範例："aba"
回傳：真

輸入範例："aaaccc"
回傳：假

    @param s:{String}
    @return :{Boolean}
*/
function checkPalindrome(s) {
  if (s.length === 0) {
    return true;
  }

  let sArray = s.split("");

  return sArray.every(
    (char, index) => char === sArray[sArray.length - 1 - index]
  );
}

console.log(checkPalindrome("abccba"));
console.log(checkPalindrome(""));
console.log(checkPalindrome("aba"));
console.log(checkPalindrome("aaaccc"));
