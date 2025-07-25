import Navbar from "../../../exhibition/components/Navbar/Navbar"
import Footer from "../../../exhibition/components/Footer/Footer"
import ImageGallery from '../../../exhibition/components/galleries/ImageGallery';
import domesticData from '../../../exhibition/db/domestic-data.json';
const page = () => {
  return (
    <>
    <Navbar/>
    <ImageGallery 
        data={domesticData}
      />
    <Footer/>
    </>
  )
}

export default page