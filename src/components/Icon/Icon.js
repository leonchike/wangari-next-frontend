import styled from "styled-components";
import {
  CheckCircle,
  Menu,
  X,
  ArrowRightCircle,
  Instagram,
  Twitter,
} from "react-feather";

const icons = {
  menu: Menu,
  close: X,
  arrowRight: ArrowRightCircle,
  instagram: Instagram,
  twitter: Twitter,
  checkCircle: CheckCircle,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
