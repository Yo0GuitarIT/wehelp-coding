/*
25. Queue 佇列的基本操作
Queue 佇列是一種基礎資料結構，我們使用陣列 / 列表來實作時，定義 Enq (Enqueue) 操作，代表將資料放到陣列 / 列表的尾巴；定義 Deq (Dequeue) 操作，代表將資料從陣列 / 列表的前面取出。

輸入一個逗號隔開的字串，每個欄位代表一個操作，若是 Enq (Enqueue) 操作，會空一格後表示要操作的整數資料。你的函式必須使用陣列 / 列表實作一個 Queue，回傳經過輸入的操作之後產生的最終結果。

請注意最後放進 Queue 中的資料是整數的型態。

輸入範例："enq 5,enq 4,deq"
回傳：[4]

輸入範例："deq,enq 1,enq -3,enq 5,deq,enq 10"
回傳：[-3, 5, 10]

輸入範例："enq 3,enq -2,deq,deq,deq"
回傳：[]

    @param ops:{String}
    @return :{[Integer]]}
*/
function processQueueOperations(ops) {
  let result = [];
  const commands = ops.split(",");

  if (commands[0] === "deq") {
    commands.shift();
  }
  commands.forEach((command) => {
    if (command === "deq") {
      result.shift();
    }

    if (command.split(" ").includes("enq")) {
      let element = command.split(" ");
      result.push(parseInt(element[1]));
    }
  });

  return result;
}

console.log(processQueueOperations("enq 5,enq 4,deq"));
console.log(processQueueOperations("deq,enq 1,enq -3,enq 5,deq,enq 10"));
console.log(processQueueOperations("enq 3,enq -2,deq,deq,deq"));
