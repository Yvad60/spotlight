import { CgSearch } from "react-icons/cg";
import CenterContent from "../layout/CenterContent";
import franceFlag from "/images/france-flag.png";
import ukFlag from "/images/united-kingdom-flag.png";

const Navbar = () => {
  return (
    <header className="pt-5 pb-2 shadow-md bg-light sticky z-50 top-0">
      <CenterContent>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold font-newsreader">Spotlight</h2>
          <div className="flex items-center gap-6">
            <div className="flex h-10 max-w-2xl w-[320px]">
              <input
                type="text"
                className="w-full h-full pl-3 border border-gray-400 rounded-tl-lg rounded-bl-lg outline-none placeholder:text-gray-400"
                placeholder="Search articles..."
              />
              <button className="h-full px-4 text-xl text-white bg-yellow-600 rounded-tr-lg rounded-br-lg">
                <CgSearch />
              </button>
            </div>
            <div>
              <button className="text-yellow-600 font-semibold">
                <img
                  src={ukFlag}
                  alt="UK flag"
                  className="inline mr-2 w-[18px]"
                />
                English
              </button>
              <span className="mx-2"> | </span>
              <button>
                <img
                  src={franceFlag}
                  alt="France flag"
                  className="inline mr-2 w-[18px]"
                />
                French
              </button>
              <span></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 mt-4 font-semibold">
          <nav className="text-yellow-600 hover:bg-[#f4efea] border-b-current pb-3 border-b-[3px] px-2">
            Trending
          </nav>
          <nav>Politics</nav>
          <nav>Business</nav>
          <nav>Sport</nav>
          <nav>Tech</nav>
        </div>
      </CenterContent>
    </header>
  );
};

export default Navbar;
