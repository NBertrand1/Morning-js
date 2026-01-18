const generateButton = document.getElementById("generate-button");
const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("profile-name");
const profileAge = document.getElementById("profile-age");
const profileCity = document.getElementById("profile-city");
const profileJob = document.getElementById("profile-job");

async function generateProfile() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const { name, dob, location, picture } = data.results[0];

        // Mettre à jour chaque élément séparément
        profileImg.src = picture.large;
        profileName.innerText = `${name.first} ${name.last}`;
        profileAge.innerText = `${dob.age} ans`;
        profileCity.innerText = location.city;
        profileJob.innerText = location.state;
    } catch (error) {
        console.error("Erreur:", error);
    }
}

generateButton.addEventListener("click", generateProfile);