import Navbar from '../../exhibition/components/Navbar/Navbar'
import Footer from "../../exhibition/components/Footer/Footer";
import Exhibition from '../../exhibition/pages/Services/Exbition/Exhibition'
import Services from '../../exhibition/pages/Services/Exbition/Services';
import ProvenProcess from '../../exhibition/pages/Services/Exbition/ProvenProcess';
import OurPortfolio from '../../exhibition/pages/Services/Exbition/OurPortfolio';
import CtaSection from "../../exhibition/components/Cta Section/CtaSection"; 

const page = () => {
  return (
    <>
    <Navbar/>
    <Exhibition/>
    <Services/>
    <ProvenProcess/>
    <OurPortfolio/>
    <CtaSection/>
    <Footer/>
    </>
  )
}

export default page;
