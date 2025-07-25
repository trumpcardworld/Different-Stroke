import Navbar from "../../graphicdesigning/components/Navbar/Navbar"
import GraphicDesign from "../../graphicdesigning/pages/Services/GraphicDesigning/GraphicDesigning"
import DesignServices from "../../graphicdesigning/pages/Services/GraphicDesigning/DesignServices"
import DesignProcess from "../../graphicdesigning/pages/Services/GraphicDesigning/DesignProcess"
import GraphicPortfolio from "../../graphicdesigning/pages/Services/GraphicDesigning/GraphicPortfolio"
import CtaSection from "../../graphicdesigning/components/Cta Section/CtaSection"
import Footer from "../../graphicdesigning/components/Footer/Footer"
const page = () => {
  return (
    <>
    <Navbar/>
    <GraphicDesign/>
    <DesignServices/>
    <DesignProcess/>
    {/* <GraphicPortfolio/> */}
    <CtaSection/>
    <Footer/>
    </>
  )
}

export default page


