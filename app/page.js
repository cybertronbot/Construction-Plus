import AboutUs from "./components/AboutUs";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";


export default function Home() {
  return (
    <div>
     <TopNav/>
     <Navbar/>
     <Hero/>
     <AboutUs/>
     <Business/>
     <Projects/>
     <Footer/>

    </div>
  )
}
