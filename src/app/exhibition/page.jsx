// import Navbar from '../../app/exhibition/components/Navbar/Navbar'
// import Footer from "../../app/exhibition/components/Footer/Footer";
// import Exhibition from '../../app/exhibition/pages/Services/Exbition/Exhibition'
// import Services from '../../app/exhibition/pages/Services/Exbition/Services';
// import ProvenProcess from '../../app/exhibition/pages/Services/Exbition/ProvenProcess';
// import OurPortfolio from '../../app/exhibition/pages/Services/Exbition/OurPortfolio';
// import CtaSection from "../../app/exhibition/components/Cta Section/CtaSection"; 

// const page = () => {
//   return (
//     <>
//     <Navbar/>
//     <Exhibition/>
//     <Services/>
//     <ProvenProcess/>
//     <OurPortfolio/>
//     <CtaSection/>
//     <Footer/>
//     </>
//   )
// }

// export default page;






import Navbar from '../exhibition/components/Navbar/Navbar'
import HeroSection from '../exhibition/pages/Home/HeroSection'
import AboutSection from '../exhibition/pages/Home/AboutSection';
import ServiceSection from '../exhibition/pages/Home/ServiceSection';
import CtaSection from '../exhibition/components/Cta Section/CtaSection';
import Footer from '../exhibition/components/Footer/Footer';


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