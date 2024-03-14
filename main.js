


let gallery = document.querySelector('.gallery')
let galleryBtn = document.querySelector('.galleryBtn')

const API_KEY = '42629760-684d30b7902779d29c66357e9';
let page = 1;

function loadImages() {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&editors_choice=true&page=${page}`)
        .then(response => response.json())
        .then(images => {
            for (const image of images.hits) {
                console.log(image.webformatURL);
                gallery.innerHTML += `<img src="${image.webformatURL}">`
            }           
        })
}

loadImages()

galleryBtn.addEventListener('click', () => {
    page++
    loadImages()
})


