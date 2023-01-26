import styled from "styled-components";

const Spacer = ({ size }) => {
  return <SpacerWrapper size={size} />;
};

const SpacerWrapper = styled.div`
  height: ${(props) => props.size}px;
`;

export default Spacer;
