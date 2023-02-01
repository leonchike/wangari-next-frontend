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

  const RemoveImage = {
    jpg: null,
    webp: null,
    alt: null,
  };

  const id = state.about[0]?._id;

  console.log(state);

  return (
    <Article>
      <ImageWrapper>
        <ImageHandler
          id={id}
          image={image}
          intent="about-profile"
          dispatch={dispatch}
        />
      </ImageWrapper>
      <div id="bioContainer">bio</div>
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
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default AboutDetails;
