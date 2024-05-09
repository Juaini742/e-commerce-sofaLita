import { useState } from "react";
import { navItem } from "../db";
import { LuMenu } from "react-icons/lu";
import { Button } from "../../Atom";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <nav className="w-full bg-white/50 backdrop-blur-lg fixed z-10">
      <div className="relative container h-14 flex justify-between items-center">
        <div className="font-bold hidden md:flex items-center gap-2">
          <span className="text-xl">
            <GiSofa />
          </span>
          SofaKita
        </div>

        <div className="flex md:hidden">
          <div>
            <button onClick={handleVisible} className="text-2xl">
              <LuMenu />
            </button>
          </div>
        </div>
        <ul
          className={`absolute flex gap-5 shadow-lg md:shadow-none md:scale-100 top-16 left-0 md:static flex-col md:flex-row bg-white md:bg-transparent p-10 rounded-xl justify-between md:gap-3
          ${
            visible
              ? "scale-0 hover:transition-all duration-300"
              : "scale-100 hover:transition-all duration-300"
          }
          `}
        >
          {navItem.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className="text-sm font-semibold hover:border-b-2 border-secondary"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Link to="/profile">
            <Button variant="primary" className="py-2 px-2">
              <FaUser />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="primary" className="py-2 px-2">
              <FaShoppingCart />
            </Button>
          </Link>
          {/* <Link to="/register">
            <Button variant="primary" className="py-1 px-5">
              Register
            </Button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
