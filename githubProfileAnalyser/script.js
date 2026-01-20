const searchInput = document.getElementById("github-username");
const searchBtn = document.getElementById("search-btn");
const profileInfo = document.getElementById("profile-info");

async function githubUserInfo() {
    // 1. Récupérer et valider le nom d'utilisateur
    const username = searchInput.value.trim();

    if (!username) {
        profileInfo.innerHTML = `<p>⚠️ Veuillez entrer un nom d'utilisateur.</p>`;
        return;
    }

    // 2. Afficher un message de chargement
    profileInfo.innerHTML = `<p>🔄 Chargement...</p>`;

    try {
        // 3. Appel API pour récupérer les infos du profil
        //    L'URL doit inclure le nom d'utilisateur (variable, pas "{username}" en texte)
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        // 4. Vérifier si l'utilisateur existe
        //    L'API GitHub retourne { message: "Not Found" } si l'utilisateur n'existe pas
        if (userData.message === "Not Found") {
            profileInfo.innerHTML = `<p>❌ Utilisateur "${username}" non trouvé.</p>`;
            return;
        }

        // 5. Appel API pour récupérer les derniers repos
        //    On demande les 5 derniers repos triés par date de mise à jour
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        const reposData = await reposRes.json();

        // 6. Créer la liste des derniers repos avec .map()
        const reposList = reposData.map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                ${repo.description ? `<br><small>${repo.description}</small>` : ''}
            </li>
        `).join('');

        // 7. Afficher les données
        profileInfo.innerHTML = `
            <img src="${userData.avatar_url}" alt="${userData.login}" style="width: 150px; border-radius: 50%;">
            <h2>${userData.name || userData.login}</h2>
            <p>${userData.bio || 'Pas de bio'}</p>
            <p>📁 Repos publics: <strong>${userData.public_repos}</strong></p>
            <p>👥 Followers: <strong>${userData.followers}</strong> | Following: <strong>${userData.following}</strong></p>
            <h3>📌 Derniers repos mis à jour:</h3>
            <ul>${reposList || '<li>Aucun repo</li>'}</ul>
            <a href="${userData.html_url}" target="_blank">Voir le profil sur GitHub</a>
        `;

    } catch (error) {
        console.error(error);
        profileInfo.innerHTML = `<p>❌ Erreur lors de la récupération des données.</p>`;
    }
}

// Event listeners
searchBtn.addEventListener("click", githubUserInfo);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        githubUserInfo();
    }
});
