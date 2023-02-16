const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString(string)", () => {
    it("should return a reversed string", () => {
        const str1 = "banana";
        const actual1 = reverseString(str1);
        expect(actual1).to.eql("ananab");

    });
});
