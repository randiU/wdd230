const baseURL = "https://randiu.github.io/wdd230/";
const linksURL = "https://randiu.github.io/wdd230/chamber/data/members.json";

const membersDisplayed = [];

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //insert function to run
    console.log(data);
    createSpotlightList(data);
    randomizeMemberAndDisplay();
  }

function createSpotlightList(membersList){
    membersList.members.forEach((member) => {
        if (member.level == "Gold" || member.level == "Silver"){
            membersDisplayed.push(member);
        }
    });
}

function randomizeMemberAndDisplay() {
  const randomNum = Math.floor(Math.random() * membersDisplayed.length);
    const businessImg = document.getElementById('business-spotlight-img');
    const businessName = document.getElementById('business-name');
    const businessDesc = document.getElementById('business-desc');
    const businessWhy = document.getElementById('business-why');
    const businessWhyAnswered = document.getElementById('business-why-answered');

    businessImg.setAttribute('src', membersDisplayed[randomNum].image);
    businessName.textContent = membersDisplayed[randomNum].name;
    businessDesc.textContent = membersDisplayed[randomNum].description;
    businessWhy.textContent = `Why Choose ${membersDisplayed[randomNum].name}?`;
    businessWhyAnswered.textContent = membersDisplayed[randomNum].cta;
    
  }

getLinks();

