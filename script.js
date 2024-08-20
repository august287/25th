const images = [];
for (let i = 1; i <= 25; i++) {
    images.push(`images/${i}.png`);
}

let currentIndex = 0;

const carouselImage = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    carouselImage.src = images[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    carouselImage.src = images[currentIndex];
});