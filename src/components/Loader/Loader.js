import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

function Delayed({ children, wait = 500 }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, wait);

    return () => clearTimeout(timeout);
  });

  return show === true ? children : null;
}

const Loader = () => {
  return (
    <Delayed wait={500}>
      <Wrapper className="centerContainer">
        <Spinner className="loading"></Spinner>
      </Wrapper>
    </Delayed>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: 0;
  width: 0;
  padding: 14px;
  border: 3px solid var(--color-black);
  border-right-color: var(--color-background);
  border-radius: 48px;
  animation: ${rotate} 1s infinite linear;
`;

export default Loader;
