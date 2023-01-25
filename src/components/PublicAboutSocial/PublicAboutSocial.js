import styled from "styled-components";
import Icon from "@/components/Icon";
import { QUERIES } from "@/styles/styleConstants";

const PublicAboutSocial = ({ instagram, twitter }) => {
  // check is props have data
  const hasInstagram = instagram !== undefined;
  const hasTwitter = twitter !== undefined;

  return (
    <Wrapper>
      {hasInstagram && (
        <SocialLink
          role="link"
          href={`https://www.instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon id="instagram" size={24} />
          <span>{instagram}</span>
        </SocialLink>
      )}
      {hasTwitter && (
        <SocialLink
          role="link"
          href={`https://www.twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon id="twitter" size={24} />
          <span>{twitter}</span>
        </SocialLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-gray-900);

  span {
    transform: translateY(-2px);
  }
`;

const SocialIcon = styled(Icon)`
  display: inline-block;
`;

export default PublicAboutSocial;
