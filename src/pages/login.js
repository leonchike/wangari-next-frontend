import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import FullPageLayout from "@/components/layouts/FullPage/FullPageLayout";
// import { loginAPI } from "@/utils/Api/auth/APIAuth";
// import useUser from "@/hooks/useUser";\
import { useAuth } from "@/hooks/use-auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { login } = useUser();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Use email and password to log the user in
    // and set the user state

    try {
      await login({ email, password });
    } catch (error) {
      console.log(error);
    }

    // Clear the form
  };

  return (
    <FullPageLayout>
      <Main>
        <Title>Login</Title>
        <div>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
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
