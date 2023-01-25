import styled from "styled-components";
import { useQuery } from "react-query";

import { getAboutData } from "@/api/public/publicAPI";
import PublicLayout from "@/components/layouts/PublicLayout";
import { QUERIES } from "@/styles/styleConstants";
import Loader from "@/components/Loader";
import ImageOutput from "@/components/ImageOutput";
import PublicAboutSocial from "@/components/PublicAboutSocial";
import { fadeIn } from "@/styles/animations";

const About = () => {
  const { data, isLoading, error } = useQuery("about", getAboutData);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <PageWrapper>
        <Header>
          <Title>About</Title>
        </Header>
        <Loader />
      </PageWrapper>
    );
  }

  const {
    bio,
    profileURL,
    profileURLWebP500w,
    instagramHandle,
    twitterHandle,
  } = data?.data[0];

  const alt = "Profile image of the Wangari Mathenge";

  return (
    <PageWrapper>
      <Header>
        <Title>About</Title>
      </Header>
      {isLoading ? (
        <Loader />
      ) : (
        <AboutSection>
          <ImageContainer>
            <ImageOutput jpg={profileURL} webp={profileURLWebP500w} alt={alt} />
          </ImageContainer>
          <SocialContainer>
            <PublicAboutSocial
              instagram={instagramHandle}
              twitter={twitterHandle}
            />
          </SocialContainer>
          <BioContainer>
            <BioMobileHeading>
              <h2>Artist's Bio</h2>
            </BioMobileHeading>
            <Bio>{bio}</Bio>
          </BioContainer>
        </AboutSection>
      )}
    </PageWrapper>
  );
};

About.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--max-large-width);
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  padding-block-start: 1rem;
  padding-block-end: calc(110 / 16 * 1rem);

  animation: ${fadeIn} 2s 500ms both;

  @media ${QUERIES.tabletAndUp} {
    padding-block-start: calc(37 / 16 * 1rem);
  }

  --max-mobile-width: 500px;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  height: 70px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-offblack);
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-areas:
    "image"
    "social"
    "bio";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: clamp(1rem, 5vw, 2rem);
  padding-block-start: 1rem;
`;

const ImageContainer = styled.div`
  grid-area: image;
  width: 100%;
  max-width: var(--max-mobile-width);
  border-radius: 2px;
  overflow: clip;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SocialContainer = styled.div`
  grid-area: social;
`;

const BioContainer = styled.div`
  grid-area: bio;
  padding-block-start: 1rem;
  max-width: var(--max-mobile-width);
`;

const BioMobileHeading = styled.div`
  h2 {
    font-size: 1.5rem;
    color: var(--color-orange);
  }
  padding-block-end: 0.75rem;
`;

const Bio = styled.p`
  color: var(--color-gray-900);
  line-height: 1.75;
`;

export default About;
