import Navbar from "../Molecules/Navbar";
import FooterSection from "../Molecules/Footer";

function Template({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mt-14">{children}</div>
      <FooterSection />
    </div>
  );
}

export default Template;
