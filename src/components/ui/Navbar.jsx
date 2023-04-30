import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { setCategory, setQueryLanguage } from "../../features/articles/articlesSlice";
import CenterContent from "../layout/CenterContent";
import SearchInput from "./SearchInput";
import franceFlag from "/images/france-flag.png";
import ukFlag from "/images/united-kingdom-flag.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { queryLanguage, selectedCategory } = useSelector((state) => state.articles);
  const selectedCategoryClassNames = "text-yellow-700 border-b-current pb-3 border-b-[3px]";
  const categories = ["trending", "health", "business", "sports", "technology"];

  const handleSelectLanguage = (language) => {
    dispatch(setQueryLanguage(language));
    if (pathname !== "/") navigate("/");
  };

  const selectCategory = (category) => {
    dispatch(setCategory(category));
    if (pathname !== "/") navigate("/");
  };

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="sticky top-0 z-50 pt-5 pb-2 shadow-md bg-light">
      <CenterContent>
        <div className="flex items-center justify-between pb-3 md:pb-0">
          <Link to="/" className="text-3xl font-semibold md:text-4xl font-newsreader">
            Spotlight
          </Link>

          <nav className="md:hidden text-center" onClick={toggleNav}>
            {isNavOpen ? <GrClose className="text-[26px]" /> : <FiMenu className="text-3xl" />}
          </nav>

          {/* Desktop */}
          <div className="items-center hidden gap-6 md:flex">
            <SearchInput />
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
        {isNavOpen && (
          <div className="md:hidden flex flex-col gap-5 items-center mt-3">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Categories</h3>
              {categories.map((category, index) => (
                <nav
                  key={index}
                  className={`capitalize cursor-pointer w-full hover:bg-[#f4efea] px-2 py-2 ${
                    category === selectedCategory && selectedCategoryClassNames
                  }`}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </nav>
              ))}
            </div>
            <SearchInput />
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
        )}

        <div className="justify-center hidden gap-8 mt-4 font-semibold md:flex">
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
