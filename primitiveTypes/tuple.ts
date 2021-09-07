let x: [string, number];

x = ["hello", 39]; // 순서, 타입, 길이 모두 일치해야 함

// x = [10, "hello"]; // 에러발생

// x[2] = "world"; // 2번쩨 인덱스가 없으므로 할당 불가

const person: [string, number] = ["Mark", 30];

// const [first, second, third] = person; //const first: string, const second: number, const third: undefined
