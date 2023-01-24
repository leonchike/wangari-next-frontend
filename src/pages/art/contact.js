import PublicLayout from "@/components/layouts/PublicLayout";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>This is the contact page</p>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Contact;
