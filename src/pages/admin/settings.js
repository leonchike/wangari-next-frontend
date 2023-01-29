import DashboardLayout from "@/components/layouts/DashboardLayout";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Settings;
