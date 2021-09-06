let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // 'boolean'

// Array

let list: Array<string> = ["a", "b", "c"];

let arr: (number | string)[] = [1, 2, 3, "a"];

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
