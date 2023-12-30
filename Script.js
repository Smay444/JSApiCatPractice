function getData(){

fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    .then(data => {
        const catImageUrl = data[0].url;
        const imageElement = document.createElement('img');
        imageElement.src = catImageUrl;

        const catImageContainer = document.getElementById('catImageContainer');
        catImageContainer.innerHTML = '';
        catImageContainer.appendChild(imageElement);

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);

    })

}