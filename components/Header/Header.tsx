import Link from "next/link";
import styled from "styled-components";
import Logo from "../Logo";
import HeaderList from "./HeaderList";

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 5.7rem;
  padding-left: 16px;
  background-color: white;
  z-index: 100;
  border-bottom: 1px solid rgb(234, 234, 234);
  position: sticky;
`;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  padding: 0 2rem;
`;

const Title = styled.h1`
  margin-left: 10px;
  font-size: 2.6rem;
  font-weight: 600;
`;

const Header = () => {
  return (
    <Container>
      <Link href="/main">
        <LogoLink>
          <Logo size="nav" />
          <Title>Commons</Title>
        </LogoLink>
      </Link>
      <HeaderList />
    </Container>
  );
};

export default Header;
