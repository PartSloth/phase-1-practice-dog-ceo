//On page load, fetches the images using https://dog.ceo/api/breeds/image/random/4

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    handleMenu();
});


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    //Parses the response as JSON
    .then(res => res.json())
    .then(images => renderImages(images));
}

//Adds image elements to the DOM for each image in the array
function renderImages(images) {
    const imagesArray = images.message;
    const imageContainer = document.getElementById('dog-image-container');
    imagesArray.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        imageContainer.appendChild(img);
    })
}

//On page load, fetches the images using https://dog.ceo/api/breeds/list/all
function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(breeds => buildBreed(breeds));
}

//Adds the breeds to the page in the <ul> provided in index.html
function buildBreed(breeds) {
    const breedsObj = breeds.message;
    Object.keys(breedsObj).forEach(breed => {
        const breedContainer = document.getElementById('dog-breeds');
        const li = document.createElement('li');
        li.textContent = breed;
        breedContainer.appendChild(li);
    })
    //User clicks on any one of the <li>s, the font color of that <li> changes.
    let breedNames = document.querySelectorAll('li');
    breedNames.forEach(breed => {
        breed.addEventListener('click', event => {
            breed.style.color = "#58cc9f";
        })
    })
}

function handleMenu() {
    let dropDownListOptions = document.querySelectorAll('option');
    dropDownListOptions.forEach(option => {
        option.addEventListener('click', event => {
            const menuSelection = option.innerText;
            let breedNames = document.querySelectorAll('li');
            breedNames.forEach(breed => {
                if(menuSelection !== breed.innerHTML.charAt(0)) {
                    breed.style = "display:none";
                } else {
                    breed.style = "";
                }
               
            })
        })
    })
}