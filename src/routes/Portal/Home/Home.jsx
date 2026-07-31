import HomeLayout from "../../../layouts/HomeLayout";
import AboutSection from "../../../components/sections/AboutSection";
import HeroSection from "../../../components/sections/HeroSection";
import ProjectSection from "../../../components/sections/ProjectSection";

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>    
    </HomeLayout>
  );
};

export default Home;