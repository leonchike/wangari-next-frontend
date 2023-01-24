import PublicLayout from "@/components/layouts/PublicLayout";

const CV = () => {
  return (
    <>
      <h1>CV</h1>
      <p>This is the cv page</p>
    </>
  );
};

CV.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default CV;
