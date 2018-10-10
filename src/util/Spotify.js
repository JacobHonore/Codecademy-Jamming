let accessToken;
let expiresIn;
const clientId = 'd403be28ade044548bc75264168d5657';
const redirectUri = 'http://localhost:3000/';
export class Spotify {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    else {
      const urlToken = window.location.href.match('/access_token=([^&]*)/');
      const urlExpire = window.location.href.match('/expires_in=([^&]*)/');
      if (urlToken && urlExpire) {
        accessToken = urlToken;
        expiresIn = urlExpire;
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
      else {
        window.location.href.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`);
      }
    }
  }
}
