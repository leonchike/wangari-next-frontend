import { useState, useId } from "react";
import Router from "next/router";
import styled from "styled-components";

import { useAuth } from "@/hooks/use-auth";

//layout
import FullPageLayout from "@/components/layouts/FullPage/FullPageLayout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Spacer from "@/components/layouts/Spacer";

const Login = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get the user from the auth context
  const { login, user } = useAuth();
  console.log(user);

  // checks if use is logged in and redirect to home page
  if (user) {
    Router.push("/admin");
  }

  // Global unique id for the forms
  const id = useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  // Handle the login -> Calls the login function from the auth context
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
  max-width: calc(300 / 16 * 1rem);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Login;
