import HeroSection from "../Molecules/Hero";
import Navbar from "../Molecules/Navbar";
import SearchSection from "../Molecules/Search";
import ServiceSection from "../Molecules/Service";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SearchSection />
      <div className="my-56"></div>
    </>
  );
}

export default Home;
