const baseURL = "https://randiu.github.io/wdd230/";
const linksURL = "https://randiu.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMemberInfo(data);
    console.log(data);
  }

  function displayMemberInfo(info){
    //Gets container for member information to be put into
    const memberGrid = document.getElementById('member-directory');

    info.members.forEach(member => {
        //create necessary elements and text
        let memberSection = document.createElement('section');

        let image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name} picture`);
        
        let memberTitle = document.createElement('h3');
        memberTitle.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = member.address;

        let phoneNumber = document.createElement('p');
        phoneNumber.textContent = member.phoneNumber;

        let website = document.createElement('a');
        website.setAttribute('href', member.url);
        website.setAttribute('target', "_blank");
        website.textContent = `${member.name} website`;

        let level = document.createElement('p');
        level.textContent = `Membership Level: ${member.level}`;

        //Adds information to the section
        memberSection.appendChild(image);
        memberSection.appendChild(memberTitle);
        memberSection.appendChild(address);
        memberSection.appendChild(phoneNumber);
        memberSection.appendChild(level);
        memberSection.appendChild(website);

        //Adds the new section to the container element
        memberGrid.appendChild(memberSection);
    });
  }

  getLinks();


  //Toggle list view and grid view

  const gridButton = document.querySelector('#grid');
  const listButton = document.querySelector('#list');

  const display = document.querySelector('#member-directory');

  gridButton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
  })

  listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
  })