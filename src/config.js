export default {
  // API_ENDPOINT: "http://localhost:8000",
  API_ENDPOINT: process.env.REACT_APP_API_URL || "http://localhost:8000",
  TOKEN_KEY: "omniqa-client-auth-token",
};
