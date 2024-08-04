import { NavDesktop } from "./components/nav-desktop"
import { NavMobile } from "./components/nav-mobile"
import SimpleMap from "./components/Map"
import Slideshow from "./components/Slideshow"
import Services from "./components/Services"
import ContactUs from "./components/Contact"
import Footer from "./components/Footer"
import Price from "./components/Price"



function App() {
  return (
    <div className="">
    <>
    <NavDesktop />
    <NavMobile />
    <Slideshow />
    <Services />
    <Price />
    <ContactUs />
    <SimpleMap />
    <Footer />
    
    </>

    </div>
  
  )
}

export default App
