import GlobalStyles from "../globalStyles";

const Commons = ({ Component }) => {
  return (
    <>
      <GlobalStyles />
      <Component />
    </>
  );
};

export default Commons;
