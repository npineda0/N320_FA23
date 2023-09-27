// ARRAY METHODS

// FOR EACH //
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

// SOME // , only boolean values
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


// FILTER //
var filterArray = [1,2,3];

var firstFilter = filterArray.filter(function(value){
    return value > 2;
})
//only fisplay 3 because only one greater than 2
console.log("first filter: ", firstFilter);

//only names with 4 letters
var names = ["carrie", "gabe", "ben", "abbey", "will", "brendon"];

function fourLetters(array) {
    return array.filter(function(value) {
        return value.length == 4;
    })
}
// returns 2 names
console.log("four letter only: ", fourLetters(names));

//filter through classes higher than 300
var classList=["n115", "n220", "n320", "n317", "n423", "n215" ];

function upperLevel(array) {
    return array.filter(function(value) {
        return value.substr(1,3) >= 300;
    })
}
console.log("class filter: ", upperLevel(classList));

//filters through students to find who is NOT EMPLYED
let students = [
    {
        firstName: "Greg",
        lastName: "smith",
        employed: true
    },
    {
        firstName: "sally",
        lastName: "richards"
    },
    {
        firstName: "jake",
        lastName: "qylenhall",
        employed: true
    },
    {
        firstName: "flo",
        lastName: "progressive",
    },
]
//this array keeps "employed" key and is labled as false
let students2 = [
    {
        firstName: "Greg",
        lastName: "smith",
        employed: true
    },
    {
        firstName: "sally",
        lastName: "richards",
        employed: false
    },
    {
        firstName: "jake",
        lastName: "qylenhall",
        employed: true
    },
    {
        firstName: "flo",
        lastName: "progressive",
        employed: false
    },
];
function filterByIndex(array, key) {
    return array.filter(function(value){
        return !value[key];
    })
}
//switch between students and students2
console.log("not employed: ", filterByIndex(students2, "employed"));


// MAP //
//squares array 
let mArr = [2,3,4,5,6];
let mapArray = mArr.map(function(value, index) {
    return {key: index, value: value*value}
})
console.log("squared: ", mapArray);

//firstNames only
function firstNames(array) {
    return array.map(function(value) {
        return value.firstName;
    })
}
console.log("only first names: ", firstNames(students2));

// value * index
function valueTimesIndex(array) {
    return array.map(function(value, index) {
        return value * index;
    })
}
console.log("value times index: ", valueTimesIndex([2,5,9]));