const chai = require("chai");
const expect = chai.expect;
const myMap = require('../problems/my-map');
describe("myMap(inputArray, callback", () =>{
    it("should return a modified array with callback called on each element", () =>{
        const arr1 = [1, 2, 3];
        const callback1 = (num) => {
            return num + 1;
        }
        const actual1 = myMap(arr1, callback1);
        expect(actual1).to.eql([2, 3, 4]);
    });
});
