// never 타입은 모든 타입의 subtype
// 어떤 것도 never에 할당 할 수 없다 (any도 불가능)

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = "hello";

if (typeof a !== "string") {
  a; // let a: never
}

declare const b: string | number;

if (typeof b !== "string") {
  b; // const b: number
}
