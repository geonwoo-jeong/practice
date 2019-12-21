import styled from "styled-components";

const Container = styled.li`
  margin: 10px;
`;

const Figure = styled.figure``;

const Figcaption = styled.figcaption``;

const Thumnail = styled.div`
  position: relative;
`;

const Label = styled.span``;

const Image = styled.img`
  width: 280px;
  height: 360px;
`;

const Card = () => {
  return (
    <Container>
      <Figure>
        <Thumnail>
          <Label>hi</Label>
          <Image src="http://test.commons-new.com/assets/images/coen/sample_img_001.jpg" />
        </Thumnail>
        <Figcaption>hi</Figcaption>
      </Figure>
    </Container>
  );
};

export default Card;
