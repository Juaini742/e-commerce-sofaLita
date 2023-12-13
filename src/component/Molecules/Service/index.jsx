import {Container, Paragraph, Title} from "../../Atom";
import {service, service2} from "../db";

function ServiceSection() {
  return (
    <Container>
      <Title variant="primary" className="text-center mt-5">
        Service
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {service.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center h-[700px] bg-cover bg-no-repeat"
            style={{backgroundImage: `url(${item.img})`}}
          >
            <div className="bg-warning/50 p-5 backdrop-blur-sm text-center w-full">
              <h5 className="font-bold">{item.name}</h5>
              <p className="text-white">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {service2.map((item) => (
        <div
          key={item.id}
          className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="flex flex-col items-end justify-between text-right">
            <div>
              <h5 className="text-primary text-xl font-bold mb-4">
                {item.leftTitle}
              </h5>
              <Paragraph>{item.leftDesc}</Paragraph>
            </div>
            <div>
              <img src={item.leftImg} alt="" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <div>
              <img src={item.rightImg} alt="" />
            </div>
            <div className="flex flex-col">
              {item.rightTitle.map((data, i) => (
                <div key={i} className="">
                  <h5 className="text-primary font-bold">{data.name}</h5>
                  <Paragraph variant="black-sm">{data.decs}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default ServiceSection;
