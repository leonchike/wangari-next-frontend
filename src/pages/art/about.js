import PublicLayout from "@/components/layouts/PublicLayout";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default About;
