import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import { TextField } from "@material-ui/core";

const Container = styled.div`
  background-color: orange;
`;

const Form = styled.form`
  width: 100%;
`;

const Search = () => {
  return (
    <AppLayout>
      <Container>
        <Form>
          <TextField label="This is Test" />
        </Form>
      </Container>
    </AppLayout>
  );
};

export default Search;
