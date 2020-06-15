import config from '../config';
const jwtDecode = require('jwt-decode');

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  getInfoFromToken() {
    const token = TokenService.getAuthToken();
    const decoded = jwtDecode(token);
    return decoded;
  },
  parseJwt(jwt) {
    if (jwt) {
      return jwtDecode(jwt);
    } else {
      return {};
    }
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken());
  }
};

export default TokenService;
