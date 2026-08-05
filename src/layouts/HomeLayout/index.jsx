import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default HomeLayout;
