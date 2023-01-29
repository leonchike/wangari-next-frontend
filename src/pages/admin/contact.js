import DashboardLayout from "@/components/layouts/DashboardLayout";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

Contact.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Contact;
