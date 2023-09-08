// //set timeout
// //takes in 2 parameters the function, and the timeout(2000)
// setTimeout(function() {
//     console.log("time is up");
// }, 2000);

// function callback() {
//     console.log("callback function")
// }

// setTimeout(callback, 1000);

// //Setinterval
// function cb() {
//     // console.log("callback is called continuously");
// }

// setInterval(cb, 3000);

// var num = 0;
// var intervalID = setInterval(function() {
//     num++;
//     console.log("current number: " + num );
//     if(num == 5) {
//         console.log(intervalID);
//         clearInterval(intervalID);
//     }
// }, 1000);

//Foreach
//goes through an array and for each array value it executes a function
var array = [1 , 2 , 3 , 4 , 5];

function forLoopArray(array) {
    for( var i = 0; i < array.length; i++) {
        console.log(array[i]*2);
    }
}
forLoopArray(array);

//foreach function paramters: item, index, array
array.forEach(function(number){
    console.log(number + 2);
});

var instruments = ['drums', 'guitar' , 'keyboard'];
var results = [];
instruments.forEach(function(item, index, array) {
    if(array.length - 1 !== index) {
        results+=item+ " ";
    } else {
        results += item + " ! !";
    }
});

console.log(results);