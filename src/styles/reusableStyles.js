import styled from "styled-components";
import { fadeIn } from "@/styles/animations";
import { QUERIES } from "@/styles/styleConstants";

export const PageWrapper = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  height: 70px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-offblack);
`;
