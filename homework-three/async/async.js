async function fetchAPI() {
    const response =  await fetch("https://dog.ceo/api/breeds/image/random/20");
    const results = await response.json();
    return results;
}

fetchAPI().then((data) => {
    console.log(data.message);
    let displayPhotos = document.createElement("p");
    displayPhotos.innerHTML = data.message;
    document.getElementsByTagName("body")[0].appendChild(displayPhotos);
}).catch((error) => {
    console.log("there was an error")
});