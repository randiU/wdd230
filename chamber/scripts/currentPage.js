const currentURL = window.location.href;
const index = document.getElementById('home-page');
const discovery = document.getElementById('discovery-page');
const directory = document.getElementById('directory-page');
const join = document.getElementById('join-page');

function addUnderlineToCurrentPageNav() {
    if (currentURL.search("discover")){
       discovery.style.textDecoration = "underline";
       console.log('discover');
    } else {
        discovery.style.textDecoration = "none";
    }
}

addUnderlineToCurrentPageNav();

console.log(currentURL);