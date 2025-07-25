import Navbar from "../../graphicdesigning/components/Navbar/Navbar"
import About from "../../graphicdesigning/pages/AboutUs/AboutUs"
import Footer from "../../graphicdesigning/components/Footer/Footer"
import TrustedByLeaders from "../../graphicdesigning/pages/AboutUs/TrustedByLeaders"
import SetUp from '../../graphicdesigning/pages/AboutUs/SetUp'
import CtaSection from "../../graphicdesigning/components/Cta Section/CtaSection"

const page = () => {
  return (
    <>
    <Navbar/>
    <About/>
    <SetUp/>
    <TrustedByLeaders/>
    <CtaSection/>
    <Footer/>
    </>
  )
}

export default page