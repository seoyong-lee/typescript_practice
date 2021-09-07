// object는 값을 담은 위치를 가르킨다

// object literal

const person1 = { name: "Mark", age: 20 };

// Object.create

const person2 = Object.create({ name: "Mark", age: 20 }); // object와 null의 유니온 타입

// object는 결국 'primitive type 이 아닌 것'을 나타낼 경우 사용한다

declare function create(o: object | null): void; // primitive type이 아닌 것만 받겠다!

// Object.create(0); // Error
