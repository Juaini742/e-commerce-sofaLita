import {Button, Paragraph, Title} from "../../../Atom";
import {LuSearchCheck} from "react-icons/lu";

function SearchSection() {
  return (
    <section
      className="mt-10 h-[700px] bg-cover"
      style={{backgroundImage: "url(../img/search.jpg)"}}
    >
      <div className="bg-black/30 h-full w-full flex justify-center items-center">
        <div className="container">
          <div className="text-center">
            <Title variant="primary">Find your dream soft</Title>
            <Paragraph variant="desc-head">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </Paragraph>
          </div>
          <div>
            <div className="flex justify-center md:justify-start my-3">
              <select
                name=""
                id=""
                className="mr-3 bg-primary py-2 px-3 text-white rounded-lg"
              >
                <option value="">material</option>
              </select>
              <select
                name=""
                id=""
                className="bg-primary py-2 px-3 text-white rounded-lg"
              >
                <option value="">price</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full py-3 px-2 rounded-lg bg-white/50"
              />
              <Button className="btn-primary-search text-2xl py-3 px-10 rounded-r-lg absolute top-0 right-0">
                <LuSearchCheck />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
