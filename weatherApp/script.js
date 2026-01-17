const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const weatherContent = document.getElementById("weather-info");

async function fetchWeather() {
    const city = cityInput.value.trim();

    // 1. Validation : vérifier que l'input n'est pas vide
    if (!city) {
        weatherContent.innerHTML = "<p>Veuillez entrer un nom de ville.</p>";
        return;
    }

    // Afficher un message de chargement
    weatherContent.innerHTML = "<p>Chargement...</p>";

    try {
        // 2. Géocodage : convertir le nom de ville en coordonnées GPS
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );
        const geoData = await geoResponse.json();

        // Vérifier si la ville a été trouvée
        if (!geoData.results || geoData.results.length === 0) {
            weatherContent.innerHTML = "<p>Ville non trouvée. Vérifiez l'orthographe.</p>";
            return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        // 3. Météo : récupérer les données avec les coordonnées
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
        );
        const weatherData = await weatherResponse.json();

        // 4. Afficher les données
        temperature.innerText = `${weatherData.current.temperature_2m}°C`;
        humidity.innerText = `${weatherData.current.relative_humidity_2m}%`;
        windSpeed.innerText = `${weatherData.current.wind_speed_10m} km/h`;

        // Réafficher la structure normale
        weatherContent.innerHTML = `
            <p><strong>${name}</strong></p>
            <p>Temperature: <span id="temperature">${weatherData.current.temperature_2m}°C</span></p>
            <p>Humidity: <span id="humidity">${weatherData.current.relative_humidity_2m}%</span></p>
            <p>Wind Speed: <span id="wind-speed">${weatherData.current.wind_speed_10m} km/h</span></p>
        `;

    } catch (error) {
        console.error(error);
        weatherContent.innerHTML = "<p>Erreur lors de la récupération de la météo. Réessayez.</p>";
    }
}

searchBtn.addEventListener("click", fetchWeather);

// Permettre la recherche avec la touche Entrée
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchWeather();
    }
});
