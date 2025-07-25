import Navbar from "../../../exhibition/components/Navbar/Navbar"
import Footer from "../../../exhibition/components/Footer/Footer"
import ImageGallery from '../../../exhibition/components/galleries/ImageGallery';
import exclusiveData from '../../../exhibition/db/exclusive-data.json';
const page = () => {
  return (
    <>
    <Navbar/>
    <ImageGallery 
        data={exclusiveData} 
      />
    <Footer/>
    </>
  )
}

export default page