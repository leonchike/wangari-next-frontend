import { useRouter } from "next/router";

import DashboardLayout from "@/components/layouts/DashboardLayout";

const Collection = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>Collection Page</h1>
      <h2>Collection ID: {id}</h2>
    </div>
  );
};

Collection.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Collection;
