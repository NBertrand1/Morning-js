const url = "https://api.api-ninjas.com/v1/dadjokes";
const jokeBtn = document.getElementById("joke-button");
const jokeContent = document.getElementById("joke-content");

async function jokeFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}