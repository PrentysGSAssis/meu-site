import ContactSection from "../../../components/sections/Portal/ContactSection";
import SaaSSection from "../../../components/sections/Portal/SaaSSection";
import PortalLayout from "../../../layouts/PortalLayout";


const SaSS = () => {
  return (
    <PortalLayout>
        <SaaSSection/>
        <ContactSection/>
    </PortalLayout>
  );
};

export default SaSS;