class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says Hi!`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }
  switchVisit(otherPerson) {
    console.log(this)
    return otherPerson.visit(this);
  }
}
let person1 = new Person ("Apple", 10);
let person2 = new Person ("Tyler", 24);

// switchVisit(person2);
console.log(person1.switchVisit(person2))

module.exports = Person
