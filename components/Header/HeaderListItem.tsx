import Link from "next/link";
import styled from "styled-components";

const Container = styled.li`
  display: table-cell;
  vertical-align: middle;
  height: 100%;
`;

const HeaderListItemLink = styled.a`
  height: 100%;
  font-size: 16px;
  color: rgb(113, 113, 113);
  padding: 6px 8px;
  cursor: pointer;
  touch-action: manipulation;

  &:hover {
    color: rgb(100, 100, 100);
  }
`;

const HeaderListItem = (props: any) => {
  const { menu } = props;
  return (
    <Container>
      <Link href="/main">
        <HeaderListItemLink>{menu.name}</HeaderListItemLink>
      </Link>
    </Container>
  );
};

export default HeaderListItem;
