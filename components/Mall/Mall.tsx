import styled from "styled-components";
import MallCard from "./MallCard";

const Container = styled.section``;

const Title = styled.h1``;

const Mall = () => {
  const dummyMalls = [
    {
      name: "オフィシャル",
      salesAmount: 485900
    },
    {
      name: "楽天",
      salesAmount: 350000
    },
    {
      name: "Amazon",
      salesAmount: 624500
    },
    {
      name: "Yahoo",
      salesAmount: 372300
    },
    {
      name: "ZOZOTOWN",
      salesAmount: 842300
    },
    {
      name: "SHOPLIST",
      salesAmount: 20000
    },
    ,
    {
      name: "Wowma!",
      salesAmount: 128420
    }
  ];

  return (
    <Container>
      <Title>12月21日のサイト別売上</Title>
      {dummyMalls.map(mall => (
        <MallCard {...mall} />
      ))}
    </Container>
  );
};

export default Mall;
