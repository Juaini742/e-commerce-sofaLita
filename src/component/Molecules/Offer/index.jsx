import {Button, Container, Paragraph} from "../../Atom";
import {Carousel} from "antd";
import {offers} from "../db";

function OfferSection() {
  return (
    <Container className="mt-10">
      <Carousel autoplay>
        {offers.map((item) => (
          <div key={item.id} className="h-[500px]">
            <div
              className="w-full h-full bg-cover "
              style={{backgroundImage: `url(${item.img})`}}
            >
              <div className="w-full h-full p-10 flex justify-center flex-col bg-black/30">
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  {item.promo}
                </h3>
                <Paragraph className="text-sm md:text-lg text-white">
                  {item.description}
                </Paragraph>
                <Button variant="primary" className="py-2 px-10 mt-5">
                  Take a Promo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default OfferSection;
