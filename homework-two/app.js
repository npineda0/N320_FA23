firstP = document.getElementsByTagName('p')[0]
secondP = document.getElementsByTagName('p')[1]
thirdP = document.getElementsByTagName('p')[2]

//higher order function taking in 2 parameters & a callback function
const doMath = (firstNum, secNum, callback) => {
    //adding both numbers
    add = firstNum + secNum;
    console.log(add);
    //subtracting both numbers
    sub = firstNum - secNum;
    console.log(sub);
    //multiplying both numbers 
    mul = firstNum * secNum;
    console.log(mul);
    //dividing both numbers
    div = firstNum/secNum;
    console.log(div);
    //rounding div variable number to 2 places

    firstP.innerHTML = ("Numbers: " + firstNum + " & " + secNum);
    callback(add, sub, mul, div);
}

//callback
const callback = (total, avg) => {
//adding all values
total = add + sub + mul + div;
secondP.innerHTML = ("Total: " + total);
//finding average of values
avg = total / 4;
avg = avg.toFixed(2);
thirdP.innerHTML = ("Average: " + avg);
}

doMath(4,8, callback);