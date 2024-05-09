/* eslint-disable react/no-unescaped-entities */
import {Link} from "react-router-dom";
import {Button, Container} from "../../Atom";

function Register() {
  return (
    <div
      className="bg-cover"
      style={{backgroundImage: "url(../img/offer2.jpg)"}}
    >
      <div className="bg-black/25 h-full w-full">
        <Container className="flex justify-center items-center min-h-screen">
          <div className="bg-red-500/40 backdrop-blur-md border-2 border-red-600 rounded-md p-5">
            <div className="text-center mb-5 text-xl font-semibold text-white">
              Welcome to our Website
            </div>
            <form>
              <div className="">
                <label htmlFor="" className="block mb-2 text-white">
                  Username
                </label>
                <input type="email" className="rounded-md h-10 w-80 pl-2" />
              </div>
              <div className="mt-5">
                <label htmlFor="" className="block mb-2 text-white">
                  Email
                </label>
                <input type="email" className="rounded-md h-10 w-80 pl-2" />
              </div>
              <div className="mt-5">
                <label htmlFor="" className="block mb-2 text-white">
                  Password
                </label>
                <input type="password" className="rounded-md h-10 w-80 pl-2" />
              </div>
              <div className="mt-5 text-xs">
                Already have account, {"  "}
                <Link to="/login" className="text-white">
                  login here
                </Link>
              </div>
              <div className="">
                <Button variant="primary" className="py-3 w-full mt-5 ">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Register;
