import styled, { keyframes, css } from "styled-components";

type Props = {
  size?: "login" | "nav" | null;
};

const rotate = keyframes`
  0% { opacity: 0 ;}
  100% { opacity: 1; }
`;

// Nav

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const NavWing = styled.span`
  position: absolute;
  transform: ${(props: any) => {
    const rotate = (parseInt(props.id, 10) + 1) * 30;
    return css`rotate(${rotate}deg) translate(0, -12.5px) rotate(120deg)`;
  }};
  border-bottom: ${props =>
    parseInt(props.id, 10) > 5 ? ".6rem solid #e05a4f" : ".6rem solid #e2dfdc"};
  border-left: 0 solid skyblue;
  border-right: 1.2rem solid transparent;
  border-top: 0 solid transparent;
  animation: ${props => {
    const seconds = parseInt(props.id + 1, 10) * 5;
    return css`120ms .${seconds}s alternate both ${rotate}`;
  }};
`;

// Login

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: 4rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 1px -10px 20px 0px rgba(0, 0, 0, 0.2),
    0px -3px 5px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;
`;

const LoginWing = styled.span`
  position: absolute;
  transform: ${props => {
    const rotate = (parseInt(props.id, 10) + 1) * 30;
    return css`rotate(${rotate}deg) translate(0, -50px) rotate(120deg)`;
  }};
  border-bottom: ${props =>
    parseInt(props.id, 10) > 5
      ? "2.4rem solid #e05a4f"
      : "2.4rem solid #e2dfdc"};
  border-left: 0 solid skyblue;
  border-right: 4.8rem solid transparent;
  border-top: 0 solid transparent;
  animation: ${props => {
    const seconds = (parseInt(props.id, 10) + 1) * 5;
    return css`120ms .${seconds}s alternate both ${rotate}`;
  }};
`;

const Logo = ({ size }: Props): React.ReactElement => {
  return (
    <>
      {size === "nav" ? (
        <NavContainer>
          {Array.from(Array(12), (_, index) => (
            <NavWing key={index} id={`${index}`} />
          ))}
        </NavContainer>
      ) : (
        <LoginContainer>
          {Array.from(Array(12), (_, index) => (
            <LoginWing key={index} id={`${index}`} />
          ))}
        </LoginContainer>
      )}
    </>
  );
};

export default Logo;
