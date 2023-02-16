const chai = require("chai");
const expect = chai.expect;
const {returnsThree, reciprocal} = require("../problems/number-fun");

describe("returnsThree()", () => {

    it("Should return 3", () => {
        const actual1 = returnsThree();

        expect(actual1).to.equal(3);
    });
})

describe("reciprocal()", () => {

    it("Should return the reciprocal of a given number", () => {
        const num1 = 5;
        const actual1 = reciprocal(num1);

        expect(actual1).to.eql(1/5)
    });

    it("Should throw an Error if n is less than 1", () => {
        const num1 = 0;

        expect(() => reciprocal(num1)).to.throw(TypeError);
    });

    it("Should throw an Error if n is greater than 1000000", () => {
        const num1 = 1000001;

        expect(() => reciprocal(num1)).to.throw(TypeError);
    });
});
