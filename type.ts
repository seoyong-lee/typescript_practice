// Primitive Type

// Boolean

new Boolean(false); // 래퍼 객체로 만들 수 있다. 그러나 'object' 타입으로 생성되어 권장되지 않는다.

// let isDone: boolean = false; // 다음과 같이 TS의 타입은 모두 소문자로 작성한다.

// isDone = true;

// console.log(typeof isDone); // 'boolean'

// Number

// String

// Symbol

// Null

// Undefined

// Array

let car: string[] = ["BMW", "BENZ"]; // 선언과 할당을 동시에

let list: Array<string> = ["a", "b", "c"]; // 제네릭 사용

let arr2: (number | string)[] = [1, 2, 3, "a"];

// Tuple

let tuple: [number, string];

tuple = [1, "name"];

tuple[1] = "two";

// Enum

enum Team {
  Manager = 101,
  Planner = 208,
  Developer = 302,
  Designer, // 302 + 1
}
