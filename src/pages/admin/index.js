import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import withAuth from "@/utils/Api/auth/WithAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Admin Dashboard!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default withAuth(Dashboard);
