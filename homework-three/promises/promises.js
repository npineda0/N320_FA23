//fetching data from api 
const fetchPromise = fetch("https://api.quotable.io/quotes?limit=20");
fetchPromise.then(function(response) {
    const quotePromise = response.json();
    quotePromise.then(function(data){
        let quotes = data.results;
        console.log(quotes);
      
        //async function displaying quotes on html
        async function displayQuote() {
            let quoteContent = document.getElementById("quoteContent");
            quoteContent.innerHTML =
            " ''" + quotes[0].content + " '' "+ `</br>` + quotes[0].author + `</br>` + 
            " ''" + quotes[1].content + " '' "+ `</br>` + quotes[1].author + `</br>` + 
            " ''" + quotes[2].content + " '' "+ `</br>` + quotes[2].author + `</br>` +
            " ''" + quotes[3].content + " '' "+ `</br>` + quotes[3].author + `</br>` +
            " ''" + quotes[4].content + " '' "+ `</br>` + quotes[4].author + `</br>` +
            " ''" + quotes[5].content + " '' "+ `</br>` + quotes[5].author + `</br>` +
            " ''" + quotes[6].content + " '' "+ `</br>` + quotes[6].author + `</br>` +
            " ''" + quotes[7].content + " '' "+ `</br>` + quotes[7].author + `</br>` +
            " ''" + quotes[8].content + " '' "+ `</br>` + quotes[8].author + `</br>` +
            " ''" + quotes[9].content + " '' "+ `</br>` + quotes[9].author + `</br>` 
        }
        displayQuote(fetchPromise);
    })
})
