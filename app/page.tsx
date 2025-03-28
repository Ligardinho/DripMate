import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className=""><Nav/></div>
      <div className=""><Hero/></div>
      <Testimonials/>
      <About/>
      <CTA/>
      <Footer/>
    </div>
  );
}
