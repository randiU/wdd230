const exitButton = document.querySelector('#exit-banner');
const weatherBanner = document.querySelector('#weather-banner');
const heroImage = document.querySelector('.hero-image');

exitButton.addEventListener('click', () => {
    weatherBanner.classList.add('close-banner');
    console.log('click');
    heroImage.style.marginTop = "2rem";
})