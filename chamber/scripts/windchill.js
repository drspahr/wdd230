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



