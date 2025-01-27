// Footer Year and Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
const temperature = 10; 
const windSpeed = 5;    

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

// This will display the wind chill result
document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed) + " °C";
