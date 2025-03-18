import httpService from "./httpService";

function createUser(user) {
  return httpService.post("/users", user);
}

function login(credentials) {
  return httpService.post("/auth", credentials);
}

const usersService = {
  createUser,
  login,
};

export default usersService;
