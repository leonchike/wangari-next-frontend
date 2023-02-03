import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import Router from "next/router";

export default function WithAuth(WrappedComponent) {
  return function ProtectedComponent(props) {
    const { user, logout, login } = useAuth();

    useEffect(() => {
      setTimeout(() => {
        if (!user) {
          Router.push("/login"); //note the hook "useAuth" will also redirect to login if the user is not authenticated
        }
      }, 100);
    }, []);

    return (
      <WrappedComponent {...props} user={user} login={login} logout={logout} />
    );
  };
}
