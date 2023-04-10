import { CgSearch } from "react-icons/cg";
import CenterContent from "../CenterContent";

const Navbar = () => {
  return (
    <header className="pt-5 pb-2 shadow-md bg-light">
      <CenterContent>
        <div className="flex justify-between">
          <h2 className="font-newsreader font-semibold text-4xl">Spotlight</h2>
          <div className="max-w-2xl w-[320px] flex h-10 ">
            <input
              type="text"
              className="w-full rounded-tl-lg rounded-bl-lg pl-3 outline-none h-full border border-gray-400 placeholder:text-gray-400"
              placeholder="Search articles..."
            />
            <button className="px-4 h-full bg-yellow-600 text-white text-xl rounded-tr-lg rounded-br-lg">
              <CgSearch />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10 font-semibold">
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
