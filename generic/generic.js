"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
console.log(hello(30)); // undefined ?
// 만약 리턴값에 따라 타입을 결정할 수 있다면?
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric("Mark")); // "Mark" 라는 타입으로 리턴
console.log(helloGeneric(30)); // 넘버타입으로 리턴
console.log(helloGeneric(true)); // 불린타입으로 리턴
// any와 다르게 들어오는 인풋에 따라 아웃풋 타입이 결정된다.
