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
            console.log(data2);
            displayCurrentWeather(data);
            displayForecast(data2);
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

const displayForecast = (forecast) => {
    const fcast = document.querySelector("#forecast");
    let pos = 12;

    forecast.forEach((forecast) => {
        if (forecast.list.indexOf(12) || forecast.list.indexOf(20) || forecast.list.indexOf(28)) {
            // Create needed elements
            const fdiv = document.createElement("div");
    
            let fdate = document.createElement("p");
            let ftemp = documenmt.createElement("h3");
            let ficon = document.createElement("img");
            let fdes = document.createElement("p");

            // Set values
            fdate.textContent = forecast.list[pos].dt_text;
            ftemp.textContent = forecast.list[pos].main.temp;
            fdes.textContent = forecast.list[pos].weather[0].description;

            // Set div attribute
            fdiv.setAttribute("class", "card");

            // Set icon attributes
            const fIconSrc = `https://openweathermap.org/img/wn/${forecast.list[pos].weather[0].icon}@2x.png`;

            ficon.setAttribute("src", fIconSrc);
            ficon.setAttribute("alt", `${forecast.list[pos].weather[0].description}`);

            // Append to div and append div to #forecast
            fdiv.appendChild(fdate);
            fdiv.appendChild(ftemp);
            fdiv.appendChild(ficon);
            fdiv.appendChild(fdes);

            fcast.appendChild(fdiv);

            pos += 8;
        }
    });
}