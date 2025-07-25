import Navbar from "../../../exhibition/components/Navbar/Navbar"
import Footer from "../../../exhibition/components/Footer/Footer"
import ImageGallery from '../../../exhibition/components/galleries/ImageGallery';
import internationalData from '../../../exhibition/db/international-data.json';
const page = () => {
  return (
    <>
    <Navbar/>
    <ImageGallery 
        data={internationalData} 
      />
    <Footer/>
    </>
  )
}

export default page