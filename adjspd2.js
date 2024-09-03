// 1

const person = {
    names: 'John Doe',
    age: 30,
    occupation: 'Developer'
  };
  
  const { names, age } = person;
  
  console.log(names); 
  console.log(age); 




// 2
export function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
 
  


import { calculateArea } from './circle.js';

const area = calculateArea(5);
console.log(area); 



// 3

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.calculateArea()); 


//   4


class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const persons = new Person('John', 'Doe');
  console.log(persons.fullName); 
  
  persons.fullName = 'Jane Smith';
  console.log(persons.fullName); 




  
//   5

const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle = new Circle(5);
  console.log(circle.calculateCircumference());



//   6

const propName = 'dynamicKey';
const value = 42;

const obj = {
  [propName]: value
};

console.log(obj.dynamicKey);



// 7


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak(); 



//   8

class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('Cannot instantiate an abstract class.');
      }
    }
  
    calculateArea() {
      throw new Error('Method must be implemented by subclass.');
    }
  }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
  
//     calculateArea() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
  
//   const circle = new Circle(5);
//   console.log(circle.calculateArea()); 



// 9



class MathUtil {
    static square(number) {
      return number * number;
    }
  }
  
  console.log(MathUtil.square(4)); 


//   10


const mySymbol = Symbol('mySymbol');
const obj = {
  [mySymbol]: 'Hello, Symbol!'
};

console.log(obj[mySymbol]); // Output: Hello, Symbol!

  