import FooterSection from "../Molecules/Footer";
import HeroSection from "../Molecules/Hero";
import Navbar from "../Molecules/Navbar";
import OfferSection from "../Molecules/Offer";
import ProductSection from "../Molecules/Products/inde";
import SampleSection from "../Molecules/Sample";
import SearchSection from "../Molecules/Search";
import ServiceSection from "../Molecules/Service";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SearchSection />
      <ProductSection />
      <SampleSection />
      <OfferSection />
      <FooterSection />
    </>
  );
}

export default Home;
