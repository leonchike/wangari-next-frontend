import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { loginAPI } from "@/utils/Api/auth/APIAuth";
import { checkForExpiredJWT } from "@/utils/helpers/checkJWT";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const getUserFromLocalStorage = () => {
    // check if local storage is available
    if (typeof window === "undefined") {
      return null;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const jwtStatus = checkForExpiredJWT();
      if (jwtStatus) {
        return storedUser;
      }
    }
    return null;
  };

  const [user, setUser] = useState(getUserFromLocalStorage());
  const router = useRouter();

  const login = async ({ email, password }) => {
    let response = await loginAPI({ email, password });

    if (!response) {
      console.log("no response");
      return;
    }

    if (response.status === 200) {
      const data = response.data;
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);
      router.push("/admin");
      // Redirect the user to the dashboard
    } else if (response.status === 401) {
      console.log("auth error");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  };

  const isAuth = () => {
    return user !== null;
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return {
    user,
    login,
    logout,
    isAuth,
  };
}
