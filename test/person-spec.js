const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person")

describe("class Person", () => {
    let person1;
    let person2;

    beforeEach(() => {
        person1 = new Person ("Apple", 10);
        person2 = new Person ("Tyler", 24);
    });

    describe("Person constructor function", () => {
        it("should have a name and age property", () => {
            expect(person1).to.have.property("name")
            expect(person1).to.have.property("age")
            expect(person2).to.have.property("name")
            expect(person2).to.have.property("age")
        });

        it('should set the name & age property when a new person is created', () => {
            // expect.fail("replace with your code");
            expect(person2.name).to.equal("Tyler");
            expect(person2.age).to.equal(24);
        });
    });


    describe("sayHello function", () => {
        it("will return a string of the Person instance's name and a greeting message", () => {
            const actual1 = person2.sayHello();
            expect(actual1).to.eql("Tyler says Hi!")
        });
    });

    describe("visit", () => {
        it ("Person visits other Person", () => {
            const actual1 = person1.visit(person2);
            expect(actual1).to.eql("Apple visited Tyler")
        });
    });


});
