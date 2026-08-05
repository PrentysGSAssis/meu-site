import HomeLayout from "../../../layouts/HomeLayout";
import AboutSection from "../../../components/sections/HomeSections/AboutSection";
import HeroSection from "../../../components/sections/HomeSections/HeroSection";
import ProjectSection from "../../../components/sections/HomeSections/ProjectSection";

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