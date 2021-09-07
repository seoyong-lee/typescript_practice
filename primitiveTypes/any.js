"use strict";
function returnAny(message) {
    // any를 설정하지 않으면 "noImplicitAny": true, 옵션으로 에러 발생
    console.log(message);
}
var any1 = returnAny("리턴은 아무거나");
any1.toString(); // 에러가 발생하지 않음
// 어떤 타입이어도 상관 없는 경우 any 사용
// 되도록이면 사용을 자제해야 하나 특별한 경우 사용 가능
var looselyTyped = {};
var d = looselyTyped.a.b.c.d; // any가 객체를 통해 전파
// 위와 같은 방식은 안정성을 해친다
function leakingAny(obj) {
    var a = obj.num; // number 타입 설정을 통해 누수 방지
    var b = a + 1;
    return b;
}
var c = leakingAny({ num: 0 });
// c.indexOf("0"); // 에러
