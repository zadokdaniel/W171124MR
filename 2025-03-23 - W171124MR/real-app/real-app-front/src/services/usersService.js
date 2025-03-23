import httpService from "./httpService";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

refreshToken();

function createUser(user) {
  return httpService.post("/users", user);
}

async function login(credentials) {
  const response = await httpService.post("/auth", credentials);

  setToken(response.data.token);

  return response;
}

function getMe() {
  return httpService.get("/users/me");
}

function logout() {
  setToken(null);
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
  refreshToken();
}

function refreshToken() {
  httpService.setDefaultCommonHeaders("x-auth-token", getJWT());
}

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const usersService = {
  createUser,
  login,
  logout,
  getMe,
  getJWT,
  getUser,
};

export default usersService;
