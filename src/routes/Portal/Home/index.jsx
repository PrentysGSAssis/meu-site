import PortalLayout from "../../../layouts/PortalLayout";
import AboutSection from "../../../components/sections/Portal/AboutSection";
import HeroSection from "../../../components/sections/Portal/HeroSection";
import ProjectSection from "../../../components/sections/Portal/ProjectSection";
import ContactSection from "../../../components/sections/Portal/ContactSection";

const Home = () => {
  return (
    <PortalLayout>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </PortalLayout>
  );
};

export default Home;