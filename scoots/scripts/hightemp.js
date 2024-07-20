const urlHighTemp = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=d299ed7d6a6b5236a4abea2f880a7218&units=imperial";

const bannerText = document.querySelector("#banner-temp-info");

async function apiFetchToday() {
    try {
        const response = await fetch(urlHighTemp);
        if (response.ok) {
            const data = await response.json();
            addBannerText(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function addBannerText(data) {
    bannerText.innerHTML = `High temperature for today: ${Math.trunc(data.main.temp_max)}&deg`;
}

apiFetchToday();