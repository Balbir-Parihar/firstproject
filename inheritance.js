class Person {
  constructor(name, aadharId) {
    this.name = name;
    this.aadharId = aadharId;
  }
  get aadhar() {
    return this.aadharId;
  }

  speak() {
    console.log(`${this.name} is speaking...`);
  }

  walk() {
    console.log(`${this.name} is walkiing...`);
  }

  move() {
    console.log(`${this.name} is moving...`);
  }
  read() {
    console.log(`${this.person} is reading alphabets`);
  }
}

class Student extends Person {
  constructor(name, rollNo, aadharId) {
    super(name, aadharId);
    this.rollNo = rollNo;
  }
  read() {
    console.log(`${this.name} is reading...`);
  }

  write() {
    console.log(`${this.name} is writing...`);
  }
}

class SeniorStudent extends Student {
  constructor(name, rollNo, aadharId, specialization) {
    super(name, rollNo, aadharId);
    this.specialization = specialization;
  }
  read() {
    console.log(`${this.name} is research paper...`);
  }

  research() {
    console.log(`${this.name} is researching on ${this.specialization}`);
  }
  aadhar() {
    console.log(super.aadhar);
  }
}

let p1 = new Person("abc");
let s1 = new Student("def");