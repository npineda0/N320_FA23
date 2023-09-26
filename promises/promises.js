// 9/12
// //3 states: pending, fufilled, rejected

// let basicPromise = new Promise(function(resolve, rejected) {
//     //changing x will change html
//     let x = 12;
//     if(x == 10) {
//         resolve();
//     } else {
//         rejected();
//     }
// })

// //only runs if resolved, problem has ben fufilled
// basicPromise.then(function() {
//     document.write("basic promise resolved");
// }, 
// //function will run if rejected
//     function() {
//     document.write("basic promise is rejected");
// })

// //another basic function using catch
// const cPromise = new Promise(function(resolve, reject) {
//     //math.random goes from 0 -> almost 1 (decimals)
//     let newNum = Math.random();
//     if(newNum < 0.5) {
//         resolve(newNum);
//     } else {
//         reject(newNum);
//     }
// })

// cPromise.then(function(num){
//     console.log("promise resolved: " + num);
// }).catch(function(num) {
//     console.log("promise rejected: " + num);
// })

// //promise w a setTimeout
// const rNumPromise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let randNum = Math.random(Math.random()*10)+1;
//         resolve(randNum);
//     }, 2000);
// })

// rNumPromise.then(function(data) {
//     console.log("setTimeout promise resolved: " + data);
// })

// console.log("setTimeout initiated");

// //promise chaining
// const promiseChain = new Promise(function(resolve, reject) {
//     resolve(5);
// })

// promiseChain.then(function(data) {
//     return data*2;
// }).then(function(data){
//     return data + 20;
// }).then(function(data) {
//     console.log(data);
// })

// //data from an 

// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// console.log("fetched promise: " + fetchPromise);

// fetchPromise.then(function(response) {
//     const jPromise = response.json();
//     jPromise.then(function(data){
//         console.log(data[2].name);
//     })
// })

/* 9/19 */
async function allThreePromises() {
    const firstPromise = new Promise(function(resolve, rejected) {
        setTimeout(() => {
            console.log("first promise");
            resolve("First fufilled");
        }, 1000);
    })
    const secondPromise = new Promise(function(resolve, rejected) {
        setTimeout(() => {
            console.log("second promise");
            resolve("second fufilled");
        }, 2000);
    })
    
    const thirdPromise = new Promise(function(resolve, rejected) {
        setTimeout(() => {
            console.log("third promise");
            resolve("third fufilled");
        }, 3000);
    })

    const combinePromises = Promise.all([firstPromise, secondPromise, thirdPromise]);
    return combinePromises;
}

async function returnData() {
    //waiting for all 3 promises to resolve 
    let data = await allThreePromises();
    console.log(data);
}
returnData();

//async function with an API call

async function goChuck() {
    //API class
    const response =  await fetch("https://api.chucknorris.io/jokes/random");
    //format into json
    const results = await response.json();
    
    return results;
}

goChuck().then((data) => {
    console.log(data);
    let chuckMessage = document.createElement("p");
    chuckMessage.innerHTML = data.value;
    document.getElementsByTagName("body")[0].appendChild(chuckMessage);
}).catch((error) => {
    console.log("there was an error")
});


