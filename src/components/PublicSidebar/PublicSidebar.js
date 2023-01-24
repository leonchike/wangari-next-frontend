import { useRouter } from "next/router";

const PublicSidebar = () => {
  // get current route
  const router = useRouter();
  const { route } = router;

  //if route is home page, return null
  if (route === "/") {
    return null;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Public Sidebar</h1>
      </div>
    </div>
  );
};

export default PublicSidebar;
