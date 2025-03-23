import { createContext, useContext, useState } from "react";
import usersService from "../services/usersService";

export const authContext = createContext();
authContext.displayName = "Auth"; // how will the components plugin will show it

export function AuthProvider({ children }) {
  const [user, setUser] = useState(usersService.getUser());

  const refreshUser = () => setUser(usersService.getUser());

  const login = async (credentials) => {
    const response = await usersService.login(credentials);

    refreshUser();
    return response;
  };

  const logout = () => {
    usersService.logout();

    refreshUser();
  };

  return (
    <authContext.Provider
      value={{
        user,
        createUser: usersService.createUser,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
