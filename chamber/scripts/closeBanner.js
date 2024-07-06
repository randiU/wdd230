const exitButton = document.querySelector('#exit-banner');
const banner = document.querySelector('#meet-and-greet-banner');

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

exitButton.addEventListener('click', () => {
    banner.classList.remove('open-banner');
    banner.classList.add('close-banner');
});


function weekDayDisplay() {
    if (day == "Monday" || day == "Wednesday" || day == "Tuesday") {
        banner.classList.add('open-banner');
    }
}

weekDayDisplay();

