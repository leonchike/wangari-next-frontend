import Image from "next/image";
import styled from "styled-components";

import { formatDatetoUTC } from "@/utils/formatDate";

const PressItem = ({ data }) => {
  const {
    title,
    publication,
    author,
    datePublished,
    description,
    url,
    publicationLogoUrl,
  } = data;

  console.log(datePublished);

  const logoURL = publicationLogoUrl;

  return (
    <ArticleWrapper>
      <LogoWrapper>
        <Image src={logoURL} alt="publication logo" fill />
      </LogoWrapper>
      <PublicationNameWrapper>
        <h4>{publication}</h4>
      </PublicationNameWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <ArthorDateWrapper>
        <p>{author} </p>
        <p> - {formatDatetoUTC(datePublished)}</p>
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
  height: 120px;
  overflow: clip;
  display: grid;
  align-items: center;
  position: relative;
  margin-block-end: 0.5rem;

  img {
    width: auto;
    height: auto;
    object-fit: contain;
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

const Title = styled.h3`
  font-weight: var(--font-weight-normal);
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

    // limit 6 lines
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
