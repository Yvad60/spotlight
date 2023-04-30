import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setCategory,
  setQueryLanguage,
  setSearchKeyword,
} from "../../features/articles/articlesSlice";
import CenterContent from "../layout/CenterContent";
import franceFlag from "/images/france-flag.png";
import ukFlag from "/images/united-kingdom-flag.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { queryLanguage, selectedCategory, searchKeyword } = useSelector((state) => state.articles);
  const [keyword, setKeyword] = useState(searchKeyword);

  const handleSelectLanguage = (language) => {
    dispatch(setQueryLanguage(language));
    if (pathname !== "/") navigate("/");
  };

  const selectCategory = (category) => {
    dispatch(setCategory(category));
    if (pathname !== "/") navigate("/");
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchKeyword(keyword));
  };

  useEffect(() => {
    if (!searchKeyword) setKeyword("");
  }, [searchKeyword]);

  const selectedCategoryClassNames = "text-yellow-700 border-b-current pb-3 border-b-[3px]";
  const categories = ["trending", "health", "business", "sports", "technology"];

  return (
    <header className="sticky top-0 z-50 pt-5 pb-2 shadow-md bg-light">
      <CenterContent>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-4xl font-semibold font-newsreader">
            Spotlight
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex h-10 max-w-2xl w-[320px]">
              <input
                type="text"
                className="w-full h-full pl-3 border border-gray-400 rounded-tl-lg rounded-bl-lg outline-none placeholder:text-gray-400"
                onChange={handleChange}
                value={keyword}
                placeholder="Search articles..."
              />
              <button
                className="h-full px-4 text-xl text-white bg-primary rounded-tr-lg rounded-br-lg"
                onClick={handleSearch}
              >
                <CgSearch />
              </button>
            </div>
            <div>
              <button
                className={queryLanguage === "us" && "text-yellow-700 font-semibold"}
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
