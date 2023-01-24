import { useRouter } from "next/router";

const PublicHeader = () => {
  // get current route
  const router = useRouter();
  const { route } = router;

  //if route is home page, return null
  if (route === "/") {
    return null;
  }

  return (
    <header>
      <h1>Public Header</h1>
    </header>
  );
};

export default PublicHeader;
