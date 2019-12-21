import styled from "styled-components";
import Header from "../Header";

const Container = styled.div``;
const Content = styled.main``;

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default AppLayout;
