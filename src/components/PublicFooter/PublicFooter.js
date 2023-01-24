import Image from "next/image";
import styled from "styled-components";

import { LOGO } from "@/constants/images";

const PublicFooter = () => {
  return (
    <Footer className="footer">
      <FooterContainer>
        <ImageWrapper>
          <Image src={LOGO} alt="logo" />
        </ImageWrapper>
      </FooterContainer>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: var(--color-white);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(4px);
  border-top: 1px solid var(--color-gray-300);
`;

const FooterContainer = styled.div`
  width: calc(100% - 4rem);
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 380px;

  img {
    width: 100%;
    height: auto;
  }
`;

export default PublicFooter;
