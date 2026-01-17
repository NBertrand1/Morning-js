const jokeBtn = document.getElementById("joke-button");
const jokeContent = document.getElementById("joke-content");

async function jokeFetch() {
    // Afficher un message de chargement
    jokeContent.innerHTML = "<p>Chargement...</p>";

    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await response.json();

        // Remplacer le contenu avec la nouvelle blague
        jokeContent.innerHTML = `<p>${data.joke}</p>`;
    } catch (error) {
        jokeContent.innerHTML = "<p>Failed to fetch a joke. Please try again.</p>";
    }
}

jokeBtn.addEventListener("click", jokeFetch);
jokeFetch();