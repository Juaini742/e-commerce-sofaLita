import {Button, Container, Paragraph, Title} from "../../Atom";
import {sample} from "../db";
import {SlBasket} from "react-icons/sl";

function SampleSection() {
  return (
    <Container>
      <Title variant="primary" className="text-center mt-10">
        Samples
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {sample.map((item) => (
          <div
            key={item.id}
            className="w-full h-[700px] bg-cover flex items-end hover:shadow-xl trans-300 "
            style={{backgroundImage: `url(${item.img})`}}
          >
            <div className="bg-black/40 p-5 text-white">
              <Title className="font-bold">{item.name}</Title>
              <Paragraph>{item.description}</Paragraph>
              <div className="flex gap-2">
                <Paragraph className="font-bold text-primary text-lg">
                  $ {item.price}
                </Paragraph>
                <Button variant="secondary" className="px-4 py-1">
                  <SlBasket />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default SampleSection;
