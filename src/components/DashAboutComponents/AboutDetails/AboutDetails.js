import styled from "styled-components";

// data
import { useAboutState, useAboutDispatch } from "@/context/adminAboutContext";

// components
import ImageHandler from "@/components/ImageHandler";

const AboutDetails = () => {
  const state = useAboutState();
  const dispatch = useAboutDispatch();

  // create image object
  const image = {
    jpg: state.about[0]?.profileURL,
    webp: state.about[0]?.profileURLWebPOriginalSize,
    alt: "profile image",
  };

  return (
    <Article>
      <ImageWrapper>
        <ImageHandler image={image} dispatch={dispatch} />
      </ImageWrapper>
      <div id="bioContainer"></div>
      <div id="socialLinks"></div>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default AboutDetails;
