import styled from "styled-components";
import {
  ArrowLeftCircle,
  CheckCircle,
  Menu,
  X,
  ArrowRightCircle,
  FileMinus,
  Grid,
  Instagram,
  Trash,
  Twitter,
  Upload,
  XCircle,
} from "react-feather";

const icons = {
  menu: Menu,
  close: X,
  arrowLeft: ArrowLeftCircle,
  arrowRight: ArrowRightCircle,
  instagram: Instagram,
  twitter: Twitter,
  checkCircle: CheckCircle,
  closeCircle: XCircle,
  trash: Trash,
  upload: Upload,
  collection: Grid,
  page: FileMinus,
};

interface IconProps {
  id: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

type IconType = IconProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ButtonHTMLAttributes<HTMLDivElement>;

const Icon = ({ id, color, size, strokeWidth, ...delegated }: IconType) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper id={id} strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<IconType>`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
