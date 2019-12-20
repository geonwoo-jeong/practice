import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #76b852;
  background: linear-gradient(to left, #76b852, #8dc26f);
`;

const LoginPage = () => {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
