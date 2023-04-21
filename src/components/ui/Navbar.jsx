import { CgSearch } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setQueryLanguage } from "../../features/articles/articlesSlice";
import CenterContent from "../layout/CenterContent";
import franceFlag from "/images/france-flag.png";
import ukFlag from "/images/united-kingdom-flag.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const { queryLanguage, selectedCategory } = useSelector((state) => state.articles);

  const handleSelectLanguage = (language) => dispatch(setQueryLanguage(language));
  const selectCategory = (category) => dispatch(setCategory(category));

  const selectedCategoryClassNames = "text-yellow-600 border-b-current pb-3 border-b-[3px]";
  const categories = ["trending", "health", "business", "sports", "technology"];

  return (
    <header className="sticky top-0 z-50 pt-5 pb-2 shadow-md bg-light">
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
              <button
                className={queryLanguage === "us" && "text-yellow-600 font-semibold"}
                onClick={() => handleSelectLanguage("us")}
              >
                <img src={ukFlag} alt="UK flag" className="inline mr-2 w-[18px]" />
                English
              </button>
              <span className="mx-2"> | </span>
              <button
                onClick={() => handleSelectLanguage("fr")}
                className={queryLanguage === "fr" && "text-yellow-600 font-semibold"}
              >
                <img src={franceFlag} alt="France flag" className="inline mr-2 w-[18px]" />
                French
              </button>
              <span></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-4 font-semibold">
          {categories.map((category, index) => (
            <nav
              key={index}
              className={`capitalize cursor-pointer hover:bg-[#f4efea] px-2 ${
                category === selectedCategory && selectedCategoryClassNames
              }`}
              onClick={() => selectCategory(category)}
            >
              {category}
            </nav>
          ))}
        </div>
      </CenterContent>
    </header>
  );
};

export default Navbar;
