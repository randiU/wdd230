const urlToday = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=d299ed7d6a6b5236a4abea2f880a7218&units=imperial";

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&cnt=24&appid=d299ed7d6a6b5236a4abea2f880a7218&units=imperial';

const today = document.querySelector("#weather-today");
const tomorrow = document.querySelector("#weather-tomorrow");
const dayThree = document.querySelector("#weather-three");


async function apiFetchToday() {
    try {
        const response = await fetch(urlToday);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            addCardInfoToday(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            addCardInfoForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function addCardInfoToday(data) {
    let title = document.createElement('h3');
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let image = document.createElement('img');
    let desc = data.weather[0].description;
    let temp = document.createElement("p");
    let humidity = document.createElement("p");
    let descInfo = document.createElement('p');


    //Capitalizes words in description
    const words = desc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    desc = words.join(" ");

    //Create card
    title.textContent = "Today";
    today.appendChild(title);
    
    console.log(today);
    
    image.setAttribute('src', icon);
    image.setAttribute('alt', `${desc} icon.`);
    today.appendChild(image);

    temp.innerHTML = `${Math.trunc(data.main.temp)}&deg`;
    today.appendChild(temp);

    humidity.innerHTML = `Humidity: ${data.main.humidity}`;
    today.appendChild(humidity);

    descInfo.innerHTML = `${desc}`;
    today.appendChild(descInfo);

}



function addCardInfoForecast(data) {
    const tomorrowh3 = document.createElement('h3');
    tomorrowh3.innerHTML = "Tomorrow";
    tomorrow.appendChild(tomorrowh3);

    let tomorrowIcon = `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;
    let tomorrowImage = document.createElement('img');
    let tomorrowDesc = data.list[5].weather[0].description;
    tomorrowImage.setAttribute('src', tomorrowIcon);
    tomorrowImage.setAttribute('alt', `${tomorrowDesc}`);
    tomorrow.appendChild(tomorrowImage);

    let tomorrowTemp = document.createElement('p');
    tomorrowTemp.innerHTML = `${Math.trunc(data.list[5].main.temp)}&deg`;
    tomorrow.appendChild(tomorrowTemp);

    let tomorrowHumidity = document.createElement('p');
    tomorrowHumidity.innerHTML = `Humidity: ${data.list[5].main.humidity}`;
    tomorrow.appendChild(tomorrowHumidity);

    //Capitalizes words in description
    const words = tomorrowDesc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    tomorrowDesc = words.join(" ");

    let tomorrowDescInfo = document.createElement('p');
    tomorrowDescInfo.innerHTML = tomorrowDesc;
    tomorrow.appendChild(tomorrowDescInfo);

}


apiFetchToday();
apiFetchForecast();