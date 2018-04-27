class Animal {
  constructor(name,age) {
    this.nickName = name;
    this.age = age;
  }
}

class Cat extends Animal {
  constructor(name,age) {
    super(name,age);
    console.log(this);
    document.write(this.nickName,this.age);
  }
}

const myCat = new Cat('Michael','2018');