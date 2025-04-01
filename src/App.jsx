import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/construction/jquery.localizationTool.css";
import "./App.css";
import "./assets/css/style.css";
// import "./assets/css/style2.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";
import "./assets/css/intlTelInput.css";
import "./assets/css/sScrollBar.css";
import "./assets/css/slick-theme.css";
// import "./assets/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/Hero";
import Gallery from "./Components/Gallery/Gallery";

import TestimonialSection from "./Components/Testimonial/Testimonials";
import Signin from "./Components/Sign/Sign";
function App() {
  return (
    <Router>
      <Navbar />
      <HeroBanner />
      <Gallery />
      <Signin />
      <TestimonialSection />
      <Footer />
    </Router>
  );
}

export default App;
