import {Container, Paragraph, Title} from "../../Atom";
import {
  FaMapMarkerAlt,
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import {FaSquarePhoneFlip} from "react-icons/fa6";
import {navItem} from "../db";

function FooterSection() {
  return (
    <footer className="w-full bg-black mt-10">
      <Container className="h-96 flex md:justify-evenly items-center flex-wrap text-white">
        <div className="flex flex-col gap-3">
          <Title className="text-2xl font-bold">SofaKita</Title>
          <Paragraph className="flex items-center gap-3">
            <FaMapMarkerAlt />
            Barabai, Kalimantan Selatan Indonesia
          </Paragraph>
          <Paragraph className="flex items-center gap-3">
            <FaSquarePhoneFlip />
            0857-5163-3160
          </Paragraph>
          <Paragraph className="flex items-center gap-3">
            <FaGoogle />
            jusaini752@gmail.com
          </Paragraph>
        </div>
        <div className="">
          <span className="border-b-2">Navigation</span>
          <ul className="flex flex-col gap-3 mt-4">
            {navItem.map((itme) => (
              <li key={itme.id} className="">
                <a href={itme.path}>{itme.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-3xl flex gap-3">
          <span>
            <FaGithub />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaWhatsapp />
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;
