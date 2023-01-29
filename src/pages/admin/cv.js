import DashboardLayout from "@/components/layouts/DashboardLayout";

const CV = () => {
  return (
    <div>
      <h1>CV</h1>
    </div>
  );
};

CV.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CV;
