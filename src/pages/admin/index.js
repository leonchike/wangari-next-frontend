import { useAuth } from "@/hooks/use-auth";

import DashboardLayout from "@/components/layouts/DashboardLayout";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Admin Dashboard!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
