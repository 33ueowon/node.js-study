console.log("1");   // 콜 스택에 추가 , 실행 (1 출력)
setTimeout(() => console.log(2),1000);  // 콜 스택에 setTimeout() = node.js API 추가
console.log("3");   //setTimeout 기라디는 동안 ("3") 콜스택에 추가 , 출력