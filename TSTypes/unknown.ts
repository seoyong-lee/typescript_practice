// 타입을 모르는 변수를 묘사해야 하는 경우
// any의 누수 문제를 방지하기 위해 any 대신 unknown 사용

declare const maybe: unknown;

// const aNumber: number = maybe; // unknown은 number에 할당 불가

// any 였다면 위의 코드는 통과

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}

// unknown을 이용하면 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁힐 수 있다
// 타입을 확정해주지 않으면 다른 곳에 할당 및 사용이 불가능하다
