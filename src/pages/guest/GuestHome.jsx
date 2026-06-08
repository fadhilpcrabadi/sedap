import GuestHeader from "../../components/guest/GuestHeader";
import HeroSection from "../../components/guest/HeroSection";
import AboutSection from "../../components/guest/AboutSection";
import ProductSection from "../../components/guest/ProductSection";
import TestimonialSection from "../../components/guest/TestimonialSection";
import GuestFooter from "../../components/guest/GuestFooter.jsx";

const GuestHome = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col">
      <GuestHeader />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <TestimonialSection />
      <GuestFooter />
    </div>
  );
};

export default GuestHome;