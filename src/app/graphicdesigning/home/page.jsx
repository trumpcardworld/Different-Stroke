import Navbar from '../../graphicdesigning/components/Navbar/Navbar'
import HeroSection from '../../graphicdesigning/pages/Home/HeroSection'
import AboutSection from '../../graphicdesigning/pages/Home/AboutSection';
import ServiceSection from '../../graphicdesigning/pages/Home/ServiceSection';
import CtaSection from '../../graphicdesigning/components/Cta Section/CtaSection';
import Footer from '../../graphicdesigning/components/Footer/Footer';


 function page() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      {/* <main>{children}</main> */}
      <ServiceSection/>
      <CtaSection/>
      <Footer />
    </>
  );
}

export default page;