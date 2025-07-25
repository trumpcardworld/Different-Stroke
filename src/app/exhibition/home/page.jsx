import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../pages/Home/HeroSection'
import AboutSection from '../pages/Home/AboutSection';
import ServiceSection from '../pages/Home/ServiceSection';
import CtaSection from '../components/Cta Section/CtaSection';
import Footer from '../components/Footer/Footer';


 function page() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <CtaSection/>
      <Footer />
    </>
  );
}

export default page;