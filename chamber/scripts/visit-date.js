const lastVisitMessage = document.querySelector('#visit-message');


const msToDays = 84600000;
const today = Math.trunc(Date.now()/msToDays);



//returns the number if a number is available, if not, returns 0
let lastVisit = Number(window.localStorage.getItem('last-visit')) || 0;

if (lastVisit == 0) {
    lastVisitMessage.textContent = `Welcome! Let us know if you have any questions!`;
} else if (lastVisit = today ) {
    lastVisitMessage.textContent = `Back so soon! Awesome!`;
} else {
    let daysPassed = lastVisit - today;
    if (daysPassed == 1) {
        lastVisitMessage.textContent = `You last visited ${daysPassed} day ago.`;
    } else {
        lastVisitMessage.textContent = `You last visited ${daysPassed} days ago.`;
    }
}

localStorage.setItem('last-visit', today);