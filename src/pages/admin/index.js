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

// const Dashboard = () => {
//   const { isAuth, user, logout } = useAuth();

//   console.log(isAuth());
//   console.log(user);

//   if (!user) {
//     // Router.push("/login");
//     console.log("not authenticated");
//   } else {
//     console.log("authenticated");
//   }

//   if (!isAuth()) {
//     return <div>Not authenticated</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome to the Admin Dashboard!</h1>
//       <button onClick={logout}>Log Out</button>
//     </div>
//   );
// };

// export default Dashboard;
