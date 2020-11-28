const client = "f3920987d31f4b4e9261a062e26e13f1";
const host = "http://localhost:3000/";
const redirect = `https://accounts.spotify.com/authorize?client_id=${client}&response_type=token&scope=playlist-modify-public&redirect_uri=${host}`;

let token = "";
let expiry = 0;

let Spotify = {
  getAccess() {
    if (!token) {
      window.location = redirect;
      let url = window.locaction.href;

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

      url = "";
      //   window.history.pushState('Access Token', null, '/');
    }
    return token;
  },

  async search(term) {
    let tracks = [];
    console.log(`https://api.spotify.com/v1/search?type=track&q=${term}`);
    await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
    console.log("tracks", tracks);
    return tracks;
  },
};

// Spotify.getAccess();
export default Spotify;
