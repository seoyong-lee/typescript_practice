// 매개변수의 타입과 리턴 타입을 명시적으로 지정하였으나
// 실제 함수 구현부의 리턴 타입과 일치하지 않아 에러 발생

// Function lacks ending return statement and return type does not include 'undefined'.
// function f4(a: number): number {
//   if (a > 0) {
//     return a * 30;
//   }
// }
// a가 음수인 경우에 대한 처리가 없기 때문에 undefined 리턴, 에러발생
