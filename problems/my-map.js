function myMap(inputArray, callback) {
    let arr = [];
    if(!inputArray.length){
        return arr;
    }
    for(let i = 0; i<inputArray.length; i++){
        arr.push(callback(inputArray[i], i, inputArray));
    }
    return arr;
}
// const callback1 = (num) => {
//     return num + 1;
// }
// myMap([1, 2, 3], callback1);
module.exports = myMap;
