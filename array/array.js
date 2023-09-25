// ARRAY METHODS

// for each
let array = [1,2,3];
array.forEach(function(value) {
    console.log("for each value: " + value)
})

function doubleValues(array) {
    var newArray = [];
    array.forEach(function(value) {
        newArray.push(value*2);
    })

    return newArray;
}
console.log("Double Values: "+ doubleValues(array));

// every,only boolean values
var everyArray = [-1,-2,-3];
var everyFunction1 = everyArray.every(function(value) {
    return value<0;
})
console.log("every function 1: " + everyFunction1);

var everyFunction2 = everyArray.every(function(value) {
    return value>-2;
})
console.log("every function 2: " + everyFunction2);

//check to see if the characters are all lowercased
function allLowerCase(string) {
    return string.split("").every(function(value) {
        return value == value.toLowerCase();
    })
}

console.log("all lowercase 1: " + allLowerCase("this is a sentence"));
console.log("all lowercase 2: " + allLowerCase("Today is Thursday"));

//check to seee if all array values are arrays
function allArrays(array) {
    return array.every(Array.isArray);
}
console.log("all arrays1: " + allArrays([[1,2], ['dog', 'cat'], [3], [true]]));
console.log("all arrays2: " + allArrays([[1,2], ['dog', 'cat'], [3], true]));

// some, only boolean values
var someArray = [10,20,30];
var someFunction1 = someArray.some(function(value) {
    return value<20;
})
var someFunction2 = someArray.some(function(value) {
    return value<5;
})
console.log("some method:" + someFunction1);
console.log("some method:" + someFunction2);

function hasEvenNum(array) {
    return array.some(function(value) {
        return value%2 == 0;
    })
}
console.log("has even number: " + hasEvenNum([1,2,3,4,5]));
console.log("has even number: " + hasEvenNum([11,21,33,41,15]));

// filter

// map