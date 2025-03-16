import httpService from "./httpService";

function createUser() {
  httpService.post("/users", {
    name: "danile",
    email: "d@gkjsafd.com",
    password: "sdfjksdfsdf",
    biz: true,
  });
}

const usersService = {
  createUser,
};

export default usersService;
