const currentURL = window.location.href;
const index = document.getElementById('home-page');
const discovery = document.getElementById('discovery-page');
const directory = document.getElementById('directory-page');
const join = document.getElementById('join-page');

function addUnderlineToCurrentPageNav() {
    if (currentURL.search("index") >= 0){
       index.style.textDecoration = "underline";
    } else if (currentURL.search("discover") >= 0){
        discovery.style.textDecoration = "underline";
    } else if (currentURL.search("directory") >= 0){
        directory.style.textDecoration = "underline";
    } else if (currentURL.search(join) >= 0){
        join.style.textDecoration = "underline";
    }
}

addUnderlineToCurrentPageNav();
