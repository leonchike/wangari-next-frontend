import PublicLayout from "@/components/layouts/PublicLayout";

const Press = () => {
  return (
    <>
      <h1>Press</h1>
      <p>This is the press page</p>
    </>
  );
};

Press.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Press;
