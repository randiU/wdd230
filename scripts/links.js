const baseURL = "https://randiu.github.io/wdd230/";
const linksURL = "https://randiu.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
 function displayLinks(weeks){
    //Gets container for the list items
    const linkList = document.getElementById('link-list');
    weeks.lessons.forEach((week) => {
        let lessonSection = document.createElement('section');
        let lessonTitle = document.createElement('h4');
        let unorderedListItem = document.createElement('ul');

        lessonTitle.textContent = `Lesson ${week.lesson}`;

        //Adds the title and a <ul> tag to the new section
        lessonSection.appendChild(lessonTitle);
        //Creates a <ul> tag for list items to be appended to
        lessonSection.appendChild(unorderedListItem);

        
        week.links.forEach((link) => {
            let listItem = document.createElement('li');
            let anchorTag = document.createElement('a');
            
            anchorTag.setAttribute('href', link.url);
            anchorTag.setAttribute('target', "_blank");
            anchorTag.textContent = link.title;

            //Adds anchor tag to the li tag
            listItem.appendChild(anchorTag)
            //Adds the list item and content to the <ul> tag
            unorderedListItem.appendChild(listItem);
        }); 
        
        //Adds the content created above to the link-list div
        linkList.appendChild(lessonSection);
    }); 
} 

getLinks();