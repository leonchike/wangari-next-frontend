import styled from "styled-components";

const FullPageLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  min-height: 100%;
`;

export default FullPageLayout;
