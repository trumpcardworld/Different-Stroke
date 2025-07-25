import Navbar from "../components/Navbar/Navbar"
import About from "../pages/AboutUs/AboutUs"
import Footer from "../components/Footer/Footer"
import TrustedByLeaders from "../pages/AboutUs/TrustedByLeaders"
import SetUp from '../pages/AboutUs/SetUp'
import CtaSection from "../components/Cta Section/CtaSection"

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