interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;

// 전혀 오류가 발생하지 않는다.
