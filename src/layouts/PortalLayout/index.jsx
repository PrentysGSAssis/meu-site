import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

const PortalLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer/>
    </>
  );
};

export default PortalLayout;