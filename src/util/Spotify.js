import client from "./client";
const host = "https://karlj38.github.io/jammming/";
const redirect = `https://accounts.spotify.com/authorize?client_id=${client}&response_type=token&scope=playlist-modify-public&redirect_uri=${host}`;

// let token = "";
let expiry = 0;

let Spotify = {
  login() {
    window.location = redirect;
  },

  getToken(token) {
    console.log("gettoken");
    if (token) {
      return token;
    }
    let url = window.location.href;
    if (url.includes("access_token")) {
      const tokenStart =
        url.indexOf("access_token") + "access_token".length + 1;
      const tokenEnd = url.indexOf("&token_type");
      token = url.substring(tokenStart, tokenEnd);

      const expiryStart = url.indexOf("expires_in") + "expires_in".length + 1;
      const expiryEnd = url.indexOf("&state");
      expiry = Number(url.substring(expiryStart, expiryEnd)) * 1000;

      setTimeout(() => {
        token = "";
      }, expiry);
      console.log("t end");
      return token;
    }
  },

  async search(term, option, token) {
    console.log("search");
    if (!term || !token) {
      return [];
    }
    let tracks = [];
    await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${option}:${term}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("req failed");
          }
        },
        () => console.log("network error")
      )
      .then((json) => {
        if (!json.tracks) {
          return [];
        }
        tracks = json.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          };
        });
      });
    console.log("s end");
    return tracks;
  },

  async getUserId(token) {
    console.log("get U");
    if (!token) {
      return;
    }
    let userId = "";
    let json = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("req failed");
        }
      },
      () => console.log("network error")
    );
    userId = json.id;
    console.log("u end");
    return userId;
  },

  async createNewPlaylist(userId, playlistName, token) {
    console.log("create");
    if (!userId || !playlistName || !token) {
      alert("Invalid submission - No playlist name given");
      return;
    }
    let url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    let data = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: playlistName }),
    }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("req failed");
        }
      },
      () => console.log("network error")
    );
    let playlistId = data.id;
    console.log("c end");
    return playlistId;
  },

  async addTracksToPlaylist(array, playlistId, token) {
    console.log("add tracks");
    if (!array || !playlistId || !token) {
      alert("Invalid submission - No tracks in playlist");
      return;
    }
    let uriString = array.join(",");
    let listUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uriString}`;
    await fetch(listUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("add end");
  },

  async save(playlistName, playlistURIs, token) {
    console.log("save start");
    if (!playlistName || !playlistURIs || !token) {
      return;
    } else {
      const userId = await this.getUserId(token);
      const playlistId = await this.createNewPlaylist(
        userId,
        playlistName,
        token
      );
      this.addTracksToPlaylist(playlistURIs, playlistId, token);
      console.log("done");
    }
    console.log("save end");
  },
};

export default Spotify;
