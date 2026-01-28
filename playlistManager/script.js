import Playlist from "./playlist.js";

try {
    const response = await fetch("https://api.soundtrackyourbrand.com/v2/search/track?q=song", {
        method: "GET",
        headers: {
            "Authorization": "Bearer 1234567890"
        }
    })
    const data = await response.json();
    console.log(data);

    const playlist = new Playlist();
    playlist = Playlist.showPlaylist();
} catch (error) {
    console.log("Erreur : " + error);
}