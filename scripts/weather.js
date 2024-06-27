const weatherIcon = document.querySelector('#weather-icon');
const weatherTemp = document.querySelector('#weather-temp');
const weatherDesc = document.querySelector('#weather-desc');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.77&lon=-111.86&appid=d299ed7d6a6b5236a4abea2f880a7218&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherInfo(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeatherInfo(data) {
    const iconImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;

    //Capitalizes words in description
    const words = desc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    desc = words.join(" ");

    weatherTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    weatherIcon.setAttribute('src', iconImg);
    weatherIcon.setAttribute('alt', `${desc} icon`);
    weatherDesc.textContent = `- ${desc}`;

    console.log(weatherDesc);

}