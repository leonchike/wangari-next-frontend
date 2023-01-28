import { useState, useEffect } from "react";

function useUser() {
  const [user, setUser] = useState(null);

  function login(userData) {
    // Use userData to log the user in and set the user state
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);
  }

  function logout() {
    // Remove the user from the state and local storage
    setUser(null);
    localStorage.removeItem("user");
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      console.log("user found");
    }
  }, []);

  function isAuthenticated() {
    return user !== null;
  }

  return { user, login, logout, isAuthenticated };
}

export default useUser;
