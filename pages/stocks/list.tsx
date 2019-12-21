import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import { ItemCard } from "../../components/Card";

const Container = styled.section`
  padding: 50px 100px;
`;

const CardContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  font-size: 30px;
`;

const SearchResultContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  background-color: #fafafa;
`;

const SearchResultMessage = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.3;
  margin: 40px 0;
`;

const SearchInput = styled.input`
  font-size: 20px;
  width: 450px;
  height: 40px;
  margin: 20px 0;
`;

const List = () => {
  return (
    <AppLayout>
      <Container>
        <SearchResultContainer>
          <SearchResultMessage>
            "12" 検索結果、65件の商品があります。
          </SearchResultMessage>
          <SearchInput />
        </SearchResultContainer>
        <CardContainer>
          {Array.from(Array(12), (_, index) => (
            <ItemCard key={index} />
          ))}
        </CardContainer>
      </Container>
    </AppLayout>
  );
};

export default List;
