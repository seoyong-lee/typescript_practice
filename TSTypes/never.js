"use strict";
// never 타입은 모든 타입의 subtype
// 어떤 것도 never에 할당 할 수 없다 (any도 불가능)
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
var a = "hello";
if (typeof a !== "string") {
    a; // let a: never
}
if (typeof b !== "string") {
    b; // const b: number
}
