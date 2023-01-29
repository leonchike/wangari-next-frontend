import DashboardLayout from "@/components/layouts/DashboardLayout";

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
About.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default About;
