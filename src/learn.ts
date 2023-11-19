interface User {
  id?: number | undefined;
  name: string;
  age: number | undefined;
  onClick?: (a: number, b: string) => boolean;
}

// compiler hint ts => transpile => js

const user: User = {
  id: undefined,
  name: "salam",
  age: 23,
  onClick: (a, b) => {
    if (a > 2) return false;
    if (b === "asdf") return false;
    return true;
  },
};

interface IVehicle {
  id: number;
  name: string;
}

interface ICar extends IVehicle {
  maxSpeed: number;
  start: () => void;
  forward: () => void;
  reverse: () => void;
}

type Bycicle = IVehicle & {
  maxSpeed: number;
};

class Car implements ICar {
  id: number;
  name: string;
  maxSpeed: number;

  start() {
    console.log("start");
  }
  forward() {}
  reverse() {}

  constructor(id: number, name: string, maxSpeed: number) {
    this.id = id;
    this.name = name;
    this.maxSpeed = maxSpeed;
  }
}

class Benz extends Car {
  constructor(id: number) {
    super(id, "Benz", 250);
  }

  stop() {
    console.log("Benz stopped");
  }
}

export function main() {
  const car1 = new Car(1, "BMW", 200);
  const car2 = new Benz(23);
  const car3: ICar = {
    id: 1,
    maxSpeed: 2,
    name: "Nissan",
    forward() {},
    reverse() {},
    start() {},
  };

  const cars: ICar[] = [car1, car2, car3];

  // for (const car of cars) {
  //   console.log(car instanceof Benz);
  //   if (car instanceof Benz) {
  //     car.stop();
  //   }
  // }

  printAttribute(car2, "maxSpeed");
  printAttribute(user, "name");
}

// Generic Types
function printAttribute<T>(obj: T, key: keyof T) {
  console.log(obj[key]);
}

const print = <T>(item: T) => {};

interface Queue<T> {
  push: (item: T) => void;
  pop: () => T;
}

const q: Queue<string> = {
  push(item) {},
  pop() {
    throw new Error("Function not implemented.");
  },
};

class Stack<T> {
  private items: T[] = [];
}

// Typescript Utility Types --------------------------------------------------------------------------
type UserWithoutId = Omit<User, "id">;
type CustomUser = Pick<User, "id" | "name">;
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type UserAge = User["age"];
type Age = Exclude<UserAge, undefined>;
type CustomUser2 = Omit<User, "age"> & {
  age: number;
};

interface CustomUser3 extends Omit<User, "age"> {
  age: number;
  category: string;
}
