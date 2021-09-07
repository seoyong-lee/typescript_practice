"use strict";
// object는 값을 담은 위치를 가르킨다
// object literal
var person1 = { name: "Mark", age: 20 };
// Object.create
var person2 = Object.create({ name: "Mark", age: 20 }); // object와 null의 유니온 타입
// Object.create(0); // Error
