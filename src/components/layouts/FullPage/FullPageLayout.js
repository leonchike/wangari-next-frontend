import styled from "styled-components";
import styles from "@/styles/Home.module.css";

const FullPageLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  min-height: 100%;
`;

export default FullPageLayout;
