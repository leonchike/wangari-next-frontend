import { useEffect } from "react";
import styled from "styled-components";

// Data
import { useAboutData } from "@/hooks/useAboutData";
import { useAboutState, useAboutDispatch } from "@/context/adminAboutContext";

// Components
import AboutDetails from "@/components/DashAboutComponents/AboutDetails";

const AboutContent = () => {
  const state = useAboutState();
  const dispatch = useAboutDispatch();

  const { aboutData, isLoading, error } = useAboutData();

  useEffect(() => {
    // if contact.data is not empty, update the reducer state with the data
    if (!!aboutData?.data) {
      dispatch({ type: "UPDATE_ABOUT_FROM_API", about: aboutData.data });
    }
  }, [aboutData, dispatch]);

  if (isLoading && !aboutData) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!state.about[0]) {
    return <div>Loading...</div>;
  }

  return (
    <ContentWrapper>
      <AboutDetails />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin-block-start: calc(40 / 16 * 1rem);
  margin-block-end: calc(40 / 16 * 1rem);
`;

export default AboutContent;
