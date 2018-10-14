let accessToken;
let expiresIn;
const clientId = 'd403be28ade044548bc75264168d5657';
const redirectUri = 'http://localhost:3000/';
const Spotify = {
  getAccessToken() {
    if (accessToken !== undefined) {
      console.log("We have a accessToken");
      return accessToken;
    }
    else {
      const urlToken = window.location.href.match(/access_token=([^&]*)/);
      const urlExpire = window.location.href.match(/expires_in=([^&]*)/);
      if (urlToken && urlExpire) {
        console.log("We have urlToken and urlExpire");
        accessToken = urlToken[1];
        expiresIn = urlExpire[1];
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
      else {
        console.log("try to replace");
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      }
    }
  },
  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(function(response) {
      return response.json();
    }).then(function(jsonResponse) {
      let tracks = []
      jsonResponse.tracks.items.forEach(function(track) {
        tracks.push ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        });
      });
      return tracks;
    });
  }
}
export default Spotify;
