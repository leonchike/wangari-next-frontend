/* 
  This component is responsible for fetching the current user data to then dispatch it to the reducer to set state.
*/
import { useEffect } from "react";
import { useUserData } from "@/hooks/useUserData";
import { useSettingsDispatch } from "@/context/adminUserContext";

import Header from "@/components/DashSettingsComponents/Header";
import Profile from "@/components/DashSettingsComponents/Profile";
import Password from "@/components/DashSettingsComponents/Password";

const Composer = () => {
  const dispatch = useSettingsDispatch();
  const { user, isLoading, error } = useUserData();

  useEffect(() => {
    if (user) {
      dispatch({
        type: "SET_USER",
        payload: user.data,
      });
    }
  }, [user, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}.</div>;
  }

  return (
    <>
      <Header />
      <Profile />
      <Password />
    </>
  );
};

export default Composer;
