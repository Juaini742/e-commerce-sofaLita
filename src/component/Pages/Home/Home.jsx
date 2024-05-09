import HeroSection from "../../Molecules/Home/Hero";
import OfferSection from "../../Molecules/Home/Offer";
import ProductSection from "../../Molecules/Home/Products/inde";
import SampleSection from "../../Molecules/Home/Sample";
import SearchSection from "../../Molecules/Home/Search";
import ServiceSection from "../../Molecules/Home/Service";
import Template from "../../Template";

function Home() {
  return (
    <Template>
      <HeroSection />
      <ServiceSection />
      <SearchSection />
      <ProductSection />
      <SampleSection />
      <OfferSection />
    </Template>
  );
}

export default Home;
