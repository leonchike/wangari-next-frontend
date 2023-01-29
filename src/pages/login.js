import { useState, useId } from "react";
import styled from "styled-components";

import { useAuth } from "@/hooks/use-auth";

//layout
import FullPageLayout from "@/components/layouts/FullPage/FullPageLayout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Spacer from "@/components/layouts/Spacer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const id = useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const handleLogin = async (e) => {
    e.preventDefault();
    // Use email and password to log the user in
    // and set the user state
    try {
      await login({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FullPageLayout>
      <Main>
        <LoginFormWrapper>
          <Title>Login</Title>
          <Form onSubmit={handleLogin}>
            <Input
              label="Email"
              type="email"
              name="email"
              maxLength="100"
              id={emailId}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Spacer size={6} /> */}
            <Input
              label="Password"
              type="password"
              name="password"
              maxLength="100"
              id={passwordId}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer size={29} />
            <Button type="submit">Login</Button>
          </Form>
        </LoginFormWrapper>
      </Main>
    </FullPageLayout>
  );
};

const Main = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;

const Title = styled.h1`
  font-size: calc(24 / 16 * 1rem);
  font-weight: 700;
  color: var(--color-offblack);
  margin-block-end: calc(20 / 16 * 1rem);
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: (300 / 16 * 1rem);
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Login;
