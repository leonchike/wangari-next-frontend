import styled from "styled-components";

// Component imports
import Icon from "@/components/Icon";
import UnstyledButton from "@/components/UnstyledButton";
import VisuallyHidden from "@/components/VisuallyHidden";

const GalleryLayout = ({ children }) => {
  return (
    <GalleryViewContainer>
      <CloseUI id="GalleryBackButton">
        <StyledIcon id="closeCircle" size={30} />
        <VisuallyHidden>Close and return back to the Collection</VisuallyHidden>
      </CloseUI>
      <LeftButton id="GalleryLeftButton">
        <StyledIcon id="arrowLeft" size={30} />
      </LeftButton>
      <RightButton id="GalleryRightButton">
        <StyledIcon id="arrowRight" size={30} />
      </RightButton>
      {children}
    </GalleryViewContainer>
  );
};

const GalleryViewContainer = styled.main`
  --UI-Elements-Spacing: 0.6rem;
  --dynamic-padding: clamp(0.6rem, 5vw, 5rem);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--dynamic-padding);
`;

const CloseUI = styled(UnstyledButton)`
  position: absolute;
  top: var(--UI-Elements-Spacing);
  right: var(--UI-Elements-Spacing);
`;

const StyledIcon = styled(Icon)`
  color: var(--color-gray-900);
`;

const LeftButton = styled(UnstyledButton)`
  position: absolute;
  top: 50%;
  left: var(--UI-Elements-Spacing);
  transform: translateY(-50%);
`;

const RightButton = styled(UnstyledButton)`
  position: absolute;
  top: 50%;
  right: var(--UI-Elements-Spacing);
  transform: translateY(-50%);
`;

const GalleryView = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default GalleryLayout;
