import styled from "styled-components";
import { fadeIn } from "@/styles/animations";
import { QUERIES } from "@/styles/styleConstants";

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
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

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  height: 70px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-offblack);
`;

// Styles for the CV Page Components
export const CVHeading = styled.h2`
  font-size: 1.2rem;
  color: var(--color-orange);
  margin-block-start: 0;
  margin-block-end: 0.75rem;
  font-weight: var(--font-weight-medium);
`;

export const CVContent = styled.p`
  font-size: 1rem;
  color: var(--color-offblack);
  margin-block-start: 0;
  margin-block-end: 0.75rem;
`;
