class Animal {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Animal {
  constructor(name,age) {
    super(name,age);
    document.write(this.name,this.age);
  }
}

const myCat = new Cat('Michael','2018');