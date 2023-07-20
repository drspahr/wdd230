const curTemp = document.querySelector("#temp");
const curHum = document.querySelector("#hum");
const loc = document.querySelector("#location");
const curIcon = document.querySelector("#conIcon");
const curCon = document.querySelector("#descr");
const fore = document.querySelector("#forecast");

const curUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=6018f46e2305c3ccbf39479a93a557cc";
const foreUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=6018f46e2305c3ccbf39479a93a557cc";

async function getCurrentWeather() {
    try {
        const response = await fetch(curUrl);
        const responsef = await fetch(foreUrl);
        if (response.ok && responsef.ok) {
            const data = await response.json();
            const data2 = await responsef.json();
            console.log(data);
            console.log(data2.list);
            displayCurrentWeather(data);
            displayThreeDay(data2.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCurrentWeather();
// getForecast();

function displayCurrentWeather(curData) {
    curTemp.textContent = curData.main.temp;
    curHum.textContent = curData.main.humidity;
    loc.textContent = curData.name;
    curCon.textContent = curData.weather[0].description;

    const iconSrc = `https://openweathermap.org/img/wn/${curData.weather[0].icon}@2x.png`;

    curIcon.setAttribute("src", iconSrc);
    curIcon.setAttribute("alt", `${curData.weather[0].description}`);
}

function displayThreeDay(data) {
    const fcast = document.querySelector("#forecast");

    data.forEach((data) => {
            // Create needed elements
            const fdiv = document.createElement("div");
    
            let fdate = document.createElement("p");
            let ftemp = document.createElement("h3");
            let ficon = document.createElement("img");
            let fdes = document.createElement("p");

            // Set values
            fdate.textContent = data.dt_text;
            ftemp.textContent = data.main.temp;
            fdes.textContent = data.weather[0].description;

            // Set div attribute
            fdiv.setAttribute("class", "card");

            // Set icon attributes
            const fIconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            ficon.setAttribute("src", fIconSrc);
            ficon.setAttribute("alt", `${data.weather[0].description}`);

            // Append to div and append div to #forecast
            fdiv.appendChild(fdate);
            fdiv.appendChild(ftemp);
            fdiv.appendChild(ficon);
            fdiv.appendChild(fdes);

            fcast.appendChild(fdiv);
    });
}