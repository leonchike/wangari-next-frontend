import styled from "styled-components";

// data
import { useAboutState, useAboutDispatch } from "@/context/adminAboutContext";

// components
import ImageHandler from "@/components/ImageHandler";
import Bio from "@/components/DashAboutComponents/Bio";

const AboutDetails = () => {
  const state = useAboutState();
  const dispatch = useAboutDispatch();

  // create image object
  const image = {
    jpg: state.about[0]?.profileURL,
    webp: state.about[0]?.profileURLWebPOriginalSize,
    alt: "profile image",
  };

  const id = state.about[0]?._id;

  const handleChangeImage = () => {
    dispatch({ id: id, type: "CHANGED_IMAGE" });
  };

  const imageUpdatedWithAPIRepsonse = (jpg) => {
    dispatch({ id: id, type: "IMAGE_UPDATED", jpg: jpg });
  };

  return (
    <Article>
      <ImageWrapper>
        <ImageHandler
          id={id}
          image={image}
          intent="about-profile"
          dispatch={dispatch}
          handleChangeImage={handleChangeImage}
          imageUpdatedWithAPIRepsonse={imageUpdatedWithAPIRepsonse}
        />
      </ImageWrapper>
      <Bio data={state.about[0]} />
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
  min-height: 400px;
  max-height: calc(600 / 16 * 1rem);
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default AboutDetails;
