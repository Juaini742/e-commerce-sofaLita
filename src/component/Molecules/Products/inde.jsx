import {Button, Container, Title} from "../../Atom";
import {product} from "../db";

function ProductSection() {
  return (
    <Container>
      <Title variant="primary" className="text-center mt-10">
        Products
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        {product.map((item) => (
          <div key={item.id} className="mb-10 mr-2">
            <div className="w-full lg:h-[250px] flex justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-full md:w-fit bg-cover bg-no-repeat"
              />
            </div>
            <div>
              <span className="text-4xl md:text-2xl font-extrabold">
                $ {item.price}
              </span>
              <h3 className="font-bold text-primary text-2xl md:text-base ">
                {item.name}
              </h3>
              <div className="flex gap-2 mt-3">
                <Button variant="secondary" className="py-1 px-3">
                  Save
                </Button>
                <Button variant="primary" className="py-1 px-3">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductSection;
