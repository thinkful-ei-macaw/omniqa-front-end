import config from "../config";
const jwtDecode = require("jwt-decode");

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
    console.log("token", token);
    console.log("decoded", decoded);
    return decoded;
  },
};

export default TokenService;
