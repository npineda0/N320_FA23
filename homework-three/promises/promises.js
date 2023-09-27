//fetching data from api 
const fetchPromise = fetch("https://api.quotable.io/quotes?limit=20");
fetchPromise.then(function(response) {
    const quotePromise = response.json();
    quotePromise.then(function(data){
        let quotes = data.results;
        console.log(quotes);
      
        //async function displaying quotes on html
        async function displayQuote() {
            let quoteContent = document.getElementById("quoteContent1");
            quoteContent.innerHTML =
            " ''" + quotes[0].content + " '' "+ `</br>` + quotes[0].author + `</br>`

            let quoteContent2 = document.getElementById("quoteContent2");
            quoteContent2.innerHTML =
            " ''" + quotes[1].content + " '' "+ `</br>` + quotes[1].author + `</br>`

            let quoteContent3 = document.getElementById("quoteContent3");
            quoteContent3.innerHTML = 
            " ''" + quotes[2].content + " '' "+ `</br>` + quotes[2].author + `</br>`

            let quoteContent4 = document.getElementById("quoteContent4");
            quoteContent4.innerHTML =
            " ''" + quotes[3].content + " '' "+ `</br>` + quotes[3].author + `</br>`

            let quoteContent5 = document.getElementById("quoteContent5");
            quoteContent5.innerHTML =
            " ''" + quotes[4].content + " '' "+ `</br>` + quotes[4].author + `</br>`

            let quoteContent6 = document.getElementById("quoteContent6");
            quoteContent6.innerHTML =
            " ''" + quotes[5].content + " '' "+ `</br>` + quotes[5].author + `</br>`

            let quoteContent7 = document.getElementById("quoteContent7");
            quoteContent7.innerHTML =
            " ''" + quotes[6].content + " '' "+ `</br>` + quotes[6].author + `</br>`

            let quoteContent8 = document.getElementById("quoteContent8");
            quoteContent8.innerHTML =
            " ''" + quotes[7].content + " '' "+ `</br>` + quotes[7].author + `</br>`

            let quoteContent9 = document.getElementById("quoteContent9");
            quoteContent9.innerHTML =
            " ''" + quotes[8].content + " '' "+ `</br>` + quotes[8].author + `</br>`

            let quoteContent10 = document.getElementById("quoteContent10");
            quoteContent10.innerHTML =
            " ''" + quotes[9].content + " '' "+ `</br>` + quotes[9].author + `</br>` 
        }
        displayQuote(fetchPromise);
    })
})
