const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const weatherContent = document.getElementById("weather-info");

async function fetchWeather() {
    const response = await fetch("", {
            headers: {
                "Accept": "application/json"
            }
        });

    const data = await response.json

    try {
        // Remplacer le contenu avec la nouvelle blague
            temperature.innerText = `${data.temparature}`;
            humidity.innerText = `${data.humidity}`;
            windSpeed.innerText = `${data.windSpeed}`;
        } catch (error) {
            weatherContent.innerHTML = "<p>Failed to fetch a joke. Please try again.</p>";
    }
        
};