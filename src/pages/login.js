import styled from "styled-components";

import FullPageLayout from "@/components/layouts/FullPage/FullPageLayout";

const Login = () => {
  return (
    <FullPageLayout>
      <Main>
        <Title>Login</Title>
      </Main>
    </FullPageLayout>
  );
};

const Main = styled.div`
  display: grid;
  place-content: center;
  background-color: hotpink;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: black;
`;

export default Login;
