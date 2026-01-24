export default class Playlist {
    constructor() {
        this.playlist = [];
    }
    
    addSong(song) {
        this.playlist.push(song);
    }   

    removeSong(song) {
        this.playlist = this.playlist.filter((s) => s !== song);
    }

    showPlaylist() {
        const playlist = document.getElementById("playlist");
        playlist.innerHTML = "";
        this.playlist.forEach((song) => {
            const songElement = document.createElement("div");
            songElement.innerHTML = song;
            playlist.appendChild(songElement);
        });
    }
}

