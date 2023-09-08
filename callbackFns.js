// //working the DOM

// //return one element: querySelector
// document.querySelector('div ul li:first-child').innerHTML = 'querySelector';

// //if there's only 1 p, it will only grab 1 then stop
// document.querySelector('.my').innerHTML = 'querySelector p';

// //grab a list

// //getElementsByCLassName('.my);
// document.getElementsByClassName('my')[1].innerHTML = "class name";

// document.getElementsByTagName('li')[1].innerHTML = "second list item";

// document.querySelectorAll('body>ul>li')[1].innerHTML = "querySelctorAll";

// //single values;

// //get element by id

// //query selector

// //lists:
// //getELementByClassName
// //getElementByTagName
// //querySelectorAll

// function callBack() {
//     console.log("this is a callback function");
// }

// function higherOrder(newFn) {
//     console.log("before callback");
//     newFn();
//     console.log("after calling function");
// }
// higherOrder(callBack);

// function firstFunction(msg) {
//     alert(msg);
// }

// function middleFunction(msg) {
//     console.log(msg);
// }

// function lastFunction(msg) {
//     return confirm(msg);
// }

// firstFunction("my message");
// middleFunction("my message");
// lastFunction("my message");


// const startFunction = (msg, mFn) => {
//     //function startFunction(msg, mFn){}
//     alert(msg);
//     mFn(msg, endFunction);
// }

// const nextFunction = (msg, eFn) => {
//     console.log(msg);
//     eFn();
// }

// const endFunction = (msg) => {
//     return confirm(msg);
// }
// startFunction("callback message...." , nextFunction);


// const costTable = (subTotal, tip, total) => {
//     let createList = 
//     `<ul>
//         <li>Subtotal: ${subTotal}</li>
//         <li>Tip: ${tip}</li>
//         <li>${total}</li>
//     </ul>;`

//     document.write(createList)
// }
// //always put default values last like taxrate=0.07
// const calcTotal = (subTotal , tip , callback , taxRate=0.07) => {
//     let total = subTotal + ( subTotal * taxRate ) + tip;
//     total = total.toFixed(2);
//     callback(subTotal, tip, total);
// }

// calcTotal(34.95, 10.50, costTable);


const callback = (half, string, array ) => {
    let middleLetter = array(half);
    let middleLetter2 = string(half);
    document.write(`Middle letter: {$middleLetter} {$middleLetter2}`)
}

//callback challenge
const findMiddle = (string, callback) => {
    let stringLength = string.length;
    //round down a fraction
    let middle = Math.floor(stringLength/2); 
    let stringArray = string.split("");
    callback(middle, string, stringArray);
}

findMiddle("Gabriel", callback);