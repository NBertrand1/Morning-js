const generateButton = document.getElementById("generate-button");
const profile = document.getElementById("profile");
const profileName = document.getElementById("profile-name");
const profileAge = document.getElementById("profile-age");
const profileCity = document.getElementById("profile-city");
const profileJob = document.getElementById("profile-job");

async function generateProfile() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const { name, dob, location, picture } = data.results[0];
    profileName.textContent = `${name.first} ${name.last}`;
    profileAge.textContent = dob.age;
    profileCity.textContent = location.city;
    profileJob.textContent = location.state;
    profile.innerHTML = `<img src="${picture.large}" alt="Profile">`;
}

generateButton.addEventListener("click", generateProfile);