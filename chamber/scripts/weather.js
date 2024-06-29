const temperature = document.querySelector('#temperature');
const weatherDesc = document.querySelector('#weather-desc');
const dayOneInfo = document.querySelector('#day-one');
const dayTwoInfo = document.querySelector('#day-two');
const dayThreeInfo = document.querySelector('#day-three');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=-117.65&cnt=24&appid=d299ed7d6a6b5236a4abea2f880a7218&units=imperial';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeatherData(data){
    temperature.innerHTML = `${Math.trunc(data.list[0].main.temp)}&deg;F`;
    let desc = `${data.list[0].weather[0].description}`;
    const words = desc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    desc = words.join(" ");
    weatherDesc.innerHTML = ` ${desc}`;
    console.log(weatherDesc);

    getDateText(data);
}

function getDateText(date){
    const months = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"]

    const dayOneText = new Date(date.list[7].dt_txt);
    const dayTwoText = new Date(date.list[15].dt_txt);
    const dayThreeText = new Date(date.list[23].dt_txt);

    const dayOneMonth = dayOneText.getMonth();
    const dayTwoMonth = dayTwoText.getMonth();
    const dayThreeMonth = dayThreeText.getMonth();


    dayOneInfo.innerHTML = `${months[dayOneMonth]} ${date.list[7].dt_txt.slice(8,10)}: ${Math.trunc(date.list[7].main.temp)}&deg;F`;
  
    dayTwoInfo.innerHTML = `${months[dayTwoMonth]} ${date.list[15].dt_txt.slice(8,10)}: ${Math.trunc(date.list[15].main.temp)}&deg;F`;

    dayThreeInfo.innerHTML = `${months[dayThreeMonth]} ${date.list[23].dt_txt.slice(8,10)}: ${Math.trunc(date.list[23].main.temp)}&deg;F`;    
}