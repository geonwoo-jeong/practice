import styled from "styled-components";
import HeaderListItem from "./HeaderListItem";

const Container = styled.li`
  display: table;
  font: inherit;
  height: 100%;
  vertical-align: baseline;
`;

const HeaderList = () => {
  const dummy = [
    {
      name: "ダッシュボード",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    },
    {
      name: "在庫照会",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    },
    {
      name: "注文指図",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    },
    {
      name: "EC販売対象在庫設定",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    },
    {
      name: "チャネル別在庫移動",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    },
    {
      name: "入荷配分設定",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    },
    {
      name: "入荷配分変更",
      url: "/dashboard",
      hasSubMenu: false,
      submenu: [
        {
          name: "sub",
          url: "sub"
        }
      ]
    }
  ];

  return (
    <Container>
      {dummy.map((menu, index) => (
        <HeaderListItem key={index} menu={menu} />
      ))}
    </Container>
  );
};

export default HeaderList;
