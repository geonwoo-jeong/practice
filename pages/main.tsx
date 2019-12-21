import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { NoSsr, Grid, Paper } from "@material-ui/core";
import AppLayout from "../components/AppLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

const Container = styled.div`
  flex-grow: 1;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: orange;
`;

const MainPage = () => {
  const classes = useStyles({});

  return (
    <AppLayout>
      <NoSsr>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledPaper>xs=12</StyledPaper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Container>
      </NoSsr>
    </AppLayout>
  );
};

export default MainPage;
