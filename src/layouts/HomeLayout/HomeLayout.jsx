import NavBar from "../../components/common/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default HomeLayout;