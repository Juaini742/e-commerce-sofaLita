import {Button, Title} from "../../../Atom";

function HeroSection() {
  return (
    <div className="bg-[url('../img/hero.jpg')] h-[700px] md:h-[900px] bg-cover bg-no-repeat">
      <div className="bg-black/25 w-full h-full flex items-center">
        <div className="container text-center md:text-left">
          <Title className=" text-4xl text-warning font-bold">
            Welcome to the dream couch
          </Title>
          <Title className="text-lg text-white w-full md:w-96 mb-3">
            Create Your Dream Room with the Right Sofa Touch Hurry, order now!!!
          </Title>
          <div className="">
            <Button variant="primary" className="py-2 px-10">
              Klik here...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
