const currentURL = window.location.href;
const index = document.getElementById('home-page');
const discovery = document.getElementById('rentals-page');
const directory = document.getElementById('reservations-page');
const join = document.getElementById('contact-page');

function addUnderlineToCurrentPageNav() {
    if (currentURL.search("index") >= 0){
       index.style.textDecoration = "underline";
    } else if (currentURL.search("rentals") >= 0){
        discovery.style.textDecoration = "underline";
    } else if (currentURL.search("reservations") >= 0){
        directory.style.textDecoration = "underline";
    } else if (currentURL.search("contact") >= 0){
        join.style.textDecoration = "underline";
    }
}

addUnderlineToCurrentPageNav();