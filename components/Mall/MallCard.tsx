import styled from "styled-components";

interface IProps {
  name: string;
  salesAmount: number;
}

const Container = styled.article`
  display: flex;
  width: 200px;
  height: 80px;
  background-color: orange;
  border: 1px solid #fff;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Name = styled.p``;

const Amount = styled.p``;

const MallCard = ({ name, salesAmount }: IProps) => {
  return (
    <Container>
      <Logo src="/icons/amazon.ico" />
      <Name>{name}</Name>
      <Amount>{salesAmount}</Amount>
    </Container>
  );
};

export default MallCard;
