import { useEffect, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import { WELCOME1JPG, WELCOME2JPG, WELCOME3JPG } from "@/constants/images";

const WelcomeImages = () => {
  const imagesJPG = [WELCOME1JPG, WELCOME2JPG, WELCOME3JPG];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // check if images are loaded
    if (!imagesJPG) {
      return null;
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === imagesJPG.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 15000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <StyledImage src={imagesJPG[index]} alt="Welcome Image" quality={100} />
    </Wrapper>
  );
};

// animate images in and out over 10 seconds each
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 15s linear infinite both;
`;

export default WelcomeImages;
