const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weathericon");
const windSpeed = document.querySelector("#ws");
const des = document.querySelector("#descr");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Hutchinson&units=imperial&appid=6018f46e2305c3ccbf39479a93a557cc";

async function weatherFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

weatherFetch();

function displayWeather(wData) {
    currentTemp.textContent = wData.main.temp.toFixed(1);
    windSpeed.textContent = wData.wind.speed.toFixed(1);

    const iconSrc = `https://openweathermap.org/img/w/${wData.weather[0].icon}.png`;
    const descr = wData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", descr);
    des.textContent = descr;

}
// Calculate Windchill

// f = 35.74 + 0.6215(t) - 35.75(s^0.16) + 0.4275(t)(s^0.16)
// f = windchill factor in Fahrenheit
// t = average air temperature in Fahrenheit
// s = wind speed in miles per hour

const temp = document.getElementById("temp").innerHTML;
const ws = document.getElementById("ws").innerHTML;
let wc = 0;

if (temp <= 50 && ws > 3.0) {
    wc = Math.round(35.74 + (0.6215 * temp) - (35.75 * (ws**0.16)) + (0.4257 * temp * (ws**0.16)));
} else {
    wc = "N/A";
}

document.getElementById("wc").innerHTML = wc;



