const checkbox = document.getElementById("dark-mode-switch");
const body = document.querySelector('body');
const text = document.getElementsByTagName('p');
const mainHeader = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const navItems = document.getElementsByTagName('a');
const secondaryHeaders = document.getElementsByTagName('h2');
const thirdHeaders = document.getElementsByTagName('h3');
const button = document.getElementsByTagName('button')[0];
const figCaption = document.getElementsByTagName('figcaption');
const label = document.getElementsByTagName('label');
const fourthHeaders = document.getElementsByTagName('h4');
const bannerText = document.getElementsByClassName('banner-text');
const joinButton = document.getElementById('join-button');
const header = document.getElementsByTagName('header');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        body.style.background = "#000000";
        for (var i = 0; i < text.length; i++) {
            text[i].style.color = "#FFF8DC";
        }

        for (var i = 0; i < mainHeader.length; i++) {
            mainHeader[i].style.color = "#FFF8DC";;
        }

        nav[0].style.background = "#000000";
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "#FFF8DC";
        }

        for (var i = 0; i < thirdHeaders.length; i++) {
            thirdHeaders[i].style.color = "#FFF8DC";
        }

        for (var i = 0; i < fourthHeaders.length; i++) {
            fourthHeaders[i].style.color = "#FFF8DC";
        }

        for (var i = 0; i < figCaption.length; i++) {
            figCaption[i].style.color = "#FFF8DC";
        }

        for (var i = 0; i < label.length; i++) {
            label[i].style.color = "#FFF8DC";
        }

        button.style.background = "#000000";


    } else {
        body.style.background = "#FFF8DC";

        for (var i = 0; i < text.length; i++) {
            text[i].style.color = "#000000";
        }

        for (var i = 0; i < mainHeader.length; i++) {
            mainHeader[i].style.color = "#6C0345";
        }

        nav[0].style.background = "#FFF8DC";
        
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "#6C0345";
        }

        for (var i = 0; i < thirdHeaders.length; i++) {
            thirdHeaders[i].style.color = "#000000";
        }

        for (var i = 0; i < fourthHeaders.length; i++) {
            fourthHeaders[i].style.color = "#000000";
        }

        for (var i = 0; i < figCaption.length; i++) {
            figCaption[i].style.color = "#000000";
        }

        for (var i = 0; i < label.length; i++) {
            label[i].style.color = "#000000";
        }

        for (var i = 0; i < bannerText.length; i++) {
            bannerText[i].style.color = "#FFF8DC";
        }

        button.style.background = "#FFF8DC";
        joinButton.style.color = "#FFF8DC";
    }
});
