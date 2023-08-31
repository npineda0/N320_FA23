//music list array 
let musicGenre = ["rock", "pop", "R&B", "indie", "alternative"];
//for loop to display all genres in console
for(var i = 0; i < musicGenre.length; i++) {
    console.log(musicGenre[i]);
}


//music preference
//get second paragraph through id
let secondPara = document.getElementById("secondP");
//add text to the innerHTML
secondPara.innerHTML=("i love pop");


//animal function
function animalSentence(breed, color ) {
    let animalPara = document.getElementById("animals");

    animalPara.innerHTML = ("I have a " + breed + " that is " + color + ".");
};

animalSentence("poodle", "grey");


//change color
function getName() {
    var userName = document.getElementById('myName').value;
    var color = prompt ("welcome " + userName + " what is your favorite color?");
    document.getElementsByTagName('body')[0].style.backgroundColor=color;
}

document.getElementsByTagName('button')[0].addEventListener('click', getName);

//pick a number
function getNumber() {
    var userNum = document.getElementById('numPick').value;
    do {
        if(userNum >= 7) {
            if(userNum%7==0) {
                alert(userNum + " is the first number divisible by 7.");
                break;
            }
            console.log("not yet....");
            userNum--;
        } else {
            alert("no matches");
        }
    } while (userNum>7);
}
document.getElementsByTagName('button')[1].addEventListener('click', getNumber);