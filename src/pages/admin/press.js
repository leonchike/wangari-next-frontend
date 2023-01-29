import DashboardLayout from "@/components/layouts/DashboardLayout";

const Press = () => {
  return (
    <div>
      <h1>Press</h1>
    </div>
  );
};

Press.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Press;
