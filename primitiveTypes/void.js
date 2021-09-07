"use strict";
// void는 return type으로 사용
// return이 없다는 것을 명시적으로 나타낼 경우 사용
function returnVoid(message) {
    console.log(message);
    return;
}
var r = returnVoid("리턴 없음"); // const r: void
