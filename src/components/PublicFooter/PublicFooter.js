import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import { LOGO } from "@/constants/images";

const PublicFooter = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  return (
    <Footer className="footer" onClick={goHome}>
      <FooterContainer>
        <ImageWrapper>
          <Image src={LOGO} alt="logo" priority />
        </ImageWrapper>
      </FooterContainer>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: #ffffff95;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--color-gray-300);
  cursor: pointer;
  backdrop-filter: blur(100px);

  grid-area: footer;
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
