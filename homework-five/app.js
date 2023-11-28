//catalogue item class
class catalogItem {
    constructor(id, title, pubYear, value) {
        this.id = id;
        this.title = title;
        this.pubYear = pubYear;
        this.value = value;
    }
}

//bookItem class extending catalogueItem class
class bookItem extends catalogItem {
    constructor(author, genre, ...args) {
        super(...args);
        this.author = author;
        this.genre = genre;
    }
}
let coralineBook = new bookItem("Neil Gailman", "Dark Fantasy", 1, "Coraline", "2002", 10.99);
console.log(coralineBook);

//dvdItem class extending catalogueItem class
class dvdItem extends catalogItem {
    constructor(director, runtime, ...args) {
        super(...args);
        this.director = director;
        this.runtime = runtime;
    }
}
let spiritedDvd = new dvdItem("Hayao Miyazaki", "2hr 5min", 2, "Spirited Away", "2001", 11.99);
console.log(spiritedDvd);

//cdItem class extending catalogueItem class
class cdItem extends catalogItem {
    constructor(artist, songAmt, ...args) {
        super(...args);
        this.artist = artist;
        this.songAmt = songAmt;
    }
}
let arcticCd = new cdItem("Arctic Monkeys", 12, 3, "AM", "2013", 7.99);
console.log(arcticCd);

//class that updates catalogue
class updateCatalog extends catalogItem {
    //empty catalog constructor
    constructor (...args) {
        super(...args);
    }

    addItem() {
        
    }

    removeItem() {
        
    }

    //add all catalog items and return the total 
    totalValue() {
        let totalValue = bookItem.value + dvdItem.value + cdItem.value;
        return totalValue;
    }

    displayCatalog() {
        let firstDiv = document.getElementsByTagName('div', [0]);
        firstDiv.innerHTML = (`<span style=font-style:'italic'>${this.title}</span>` + " " + `${this.pubYear}` +" "+ `${this.value}` +" "+ `${this.author}` +" "+ `${this.genre}` +" "+ `${this.director}` +" "+`${this.runtime}` + `${this.artist}` +" "+ `${this.songAmt}`);
        return firstDiv;
    }
}

