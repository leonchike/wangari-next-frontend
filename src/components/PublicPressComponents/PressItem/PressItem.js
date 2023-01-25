import Image from "next/image";
import styled from "styled-components";

import formatDate from "@/utils/formatDate";

const PressItem = ({ data }) => {
  const { title, publication, author, datePublished, description, url } = data;

  const altURL = [
    "https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/WSJ_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/VOGUE_LOGO.svg/2880px-VOGUE_LOGO.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cond%C3%A9_Nast_logo.svg/2880px-Cond%C3%A9_Nast_logo.svg.png",
  ];

  const randomNumber = Math.floor(Math.random() * 4);

  const logoURL = altURL[randomNumber];

  return (
    <ArticleWrapper>
      <LogoWrapper>
        <Image src={logoURL} alt="publication logo" width={300} height={100} />
      </LogoWrapper>
      <PublicationNameWrapper>
        <h4>{publication}</h4>
      </PublicationNameWrapper>
      <TitleWrapper>
        <h3>{title}</h3>
      </TitleWrapper>
      <ArthorDateWrapper>
        <p>{author} </p>
        <p> - {formatDate(datePublished)}</p>
      </ArthorDateWrapper>
      <Abstract>
        <p>{description}</p>
      </Abstract>
      <LinkWrapper>
        <StyledLink href={url} target="_blank" rel="noreferrer" role="link">
          Link to Article
        </StyledLink>
      </LinkWrapper>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.article`
  width: 100%;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 60px;
  overflow: clip;
  display: grid;
  place-content: center;

  img {
    width: auto;
    height: auto;
    object-fit: scale-down;
  }
`;

const PublicationNameWrapper = styled.div`
  h4 {
    color: var(--color-gray-700);
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
  }
`;

const TitleWrapper = styled.div`
  h3 {
    color: var(--color-offblack);
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const ArthorDateWrapper = styled.div`
  p {
    color: var(--color-gray-700);
    font-size: 1rem;
    font-weight: var(--font-weight-normal);
    display: inline-block;

    &:last-child {
      margin-inline-start: 0.25rem;
    }
  }
`;

const Abstract = styled.div`
  padding-block-start: 1rem;
  padding-block-end: 1rem;

  p {
    color: var(--color-offblack);
    font-size: 1rem;
    font-weight: var(--font-weight-normal);
  }
`;

const StyledLink = styled.a`
  color: var(--color-orange);
  padding-block-start: 0.5rem;
  padding-block-end: 0.8rem;
  padding-inline-end: 1rem;
  border-top: 2px solid var(--color-orange);
`;

const LinkWrapper = styled.div`
  display: flex;
`;

export default PressItem;
