import { useState } from "react";
import styled from "styled-components";
import { loginApi } from "../../api";

const Container = styled.div`
  width: 36rem;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  padding: 4.5rem;
`;

const Body = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: inherit;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;

  &:active,
  &:focus {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px;
    transition: box-shadow 0.1s linear, transform 0.1s linear;
  }
`;

const Button = styled.button`
  font-family: inherit;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  background: linear-gradient(to left, #fdc830, #f37335);
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &[disabled] {
    background-color: grey;
  }

  &:hover {
    transform: translateY(-0.3rem);
    transition: box-shadow 0.2s linear, transform 0.2s linear;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await loginApi({ login_id: username, password });
      console.log(data);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <Container>
      <Body>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
            required
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            required
          />
          <Button>Login</Button>
        </Form>
      </Body>
    </Container>
  );
};

export default LoginForm;
