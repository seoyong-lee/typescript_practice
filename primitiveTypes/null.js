"use strict";
// let MyName: string = null; // strictNullCheck 해제 필요
// let u: undefined = null;
// let v: void = void; // void에는 값을 할당해야 한다
var v = undefined;
var union = null; // 유니온 타입, string과 null 모두 가능
union = "Mark";
// undefined는 무언가가 아예 준비되지 않은 상태
var u = undefined;
console.log(u); // undefined
console.log(typeof u); // undefined
