const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const movieInfo = document.getElementById("movie-info");

async function fetchMovie() {
    const movieTitle = searchInput.value.trim();

    // Validation de l'input
    if (!movieTitle) {
        movieInfo.innerHTML = "<p>Veuillez entrer un titre de film.</p>";
        return;
    }

    movieInfo.innerHTML = "<p>Chargement...</p>";

    try {
        const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=bffab567`);
        const data = await res.json();
        console.log(data);

        // Vérifier si le film a été trouvé
        if (data.Response === "False") {
            movieInfo.innerHTML = `<p>Film non trouvé : ${data.Error}</p>`;
            return;
        }

        // Récupérer le rating (avec fallback si pas de ratings)
        const rating = data.Ratings && data.Ratings.length > 0
            ? data.Ratings[0].Value
            : "Non disponible";

        movieInfo.innerHTML = `
            <img src="${data.Poster !== "N/A" ? data.Poster : ''}" alt="${data.Title}" style="max-width: 200px;">
            <h2>${data.Title}</h2>
            <p>Director: ${data.Director}</p>
            <p>Release Year: ${data.Year}</p>
            <p>Rating: ${rating}</p>
            <p>Plot: ${data.Plot}</p>
            <button id="favorite-btn">Favoris</button>
        `;
    } catch (error) {
        console.error(error);
        movieInfo.innerHTML = "<p>Erreur lors de la récupération du film.</p>";
    }
}

// ✅ Sans parenthèses - passe la référence de la fonction
searchBtn.addEventListener("click", fetchMovie);

// Permettre la recherche avec Entrée
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchMovie();
    }
});