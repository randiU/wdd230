const temp = document.getElementById("temperature").textContent;
const wSpeed = document.getElementById("wind-speed").textContent;

function calculateWindChill (temperature, windchill){
    if (temperature <= 50 && windchill > 3 ) {
        const windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
        const windChillRounded = Math.round(windChill);
        document.getElementById("wind-chill").innerHTML = `${windChillRounded} &deg; F`;
    } else {
        document.getElementById("wind-chill").innerHTML = "N/A";
    }
}

calculateWindChill(temp, wSpeed);



