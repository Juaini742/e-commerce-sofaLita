import {Button} from "../../Atom";
import {product} from "../db";
import {FaTrashAlt} from "react-icons/fa";

function CartComponent() {
  return (
    <section>
      <div className="bg-[url('../img/hero.jpg')] h-[300px] md:h-[400px] bg-cover bg-no-repeat">
        <div className="bg-black/25 w-full h-full flex items-center">
          <div className="container text-center font-bold text-2xl text-white">
            WELCOME TO CART PAGE
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
          <div className="w-full">
            {product.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-14">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="md:flex justify-between w-full">
                  <div className=" w-44">{item.name}</div>
                  <div className="w-14">$ {item.price}</div>
                  <div className="">1</div>
                  <div className="">$ 8472938</div>
                  <div className=""></div>
                  <button className="text-xl">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-warning p-14 flex flex-col justify-center rounded-lg ">
            <span className="text-center font-bold">Cart Totals</span>
            <div>
              <div className="flex justify-between gap-3 mt-10">
                <span className="font-bold">Subtotal</span> 348627
              </div>
              <div className="flex justify-between gap-3 mt-5">
                <span className="font-bold">Total</span> 348978
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Button variant="primary-outline" className="py-2 px-5 ">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartComponent;
