// ECMAScript 2015의 Symbol
// new Symbol 로 사용 불가
// Symbol(대문자)을 함수로 사용해서 symbol(소문자) 타입 생성

// tsconfig 조정 필요    "lib": ["ES2015", "DOM"],

console.log(Symbol("foo") === Symbol("foo")); // false

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym]; // 접근을 필요한 경우에만 허락하는 경우 사용
