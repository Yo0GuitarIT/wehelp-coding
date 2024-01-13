/*
43. 大駝峰命名轉換為蛇形命名
輸入一個包含大小寫英數字的字串，代表程式語言中常見的大駝峰命名法，你的函式能將此字串轉換為另外一種常見、包含底線的蛇形命名法。

大駝峰命名法：多個英文單字的第一個字母皆大寫。
蛇形命名法：用底線隔開多個全小寫的英文單字。

輸入範例："Test"
回傳："test"

輸入範例："HelloWorld"
回傳："hello_world"

輸入範例："GetWeatherData"
回傳："get_weather_data"

    @param name:{String}
    @return :{String}
*/
function upperCamelToSnake(name) {
  let sliceKey = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase()) {
      sliceKey.push(i);
    }
  }

  if (sliceKey.length === 1) {
    return name.toLowerCase()
  } else {
    let sliceWords = [];
    for (let i = 0; i < sliceKey.length - 1; i++) {
      sliceWords.push(name.slice(sliceKey[i], sliceKey[i + 1]));
    }
    sliceWords.push(name.slice(sliceKey[sliceKey.length - 1]));

    const lowerWords = sliceWords.map(element => element.toLowerCase());
    const joinWords = lowerWords.join("_")

    return joinWords;
  }
}

console.log(upperCamelToSnake("Test"));
console.log(upperCamelToSnake("HelloWorld"));
console.log(upperCamelToSnake("GetWeatherData"));


