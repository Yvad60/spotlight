import { FiChevronDown, FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames";
import { useState } from "react";
import { setCategory, setQueryLanguage } from "../../features/articles/articlesSlice";
import CenterContent from "../layout/CenterContent";
import Publishers from "./Publishers";
import SearchInput from "./SearchInput";
import franceFlag from "/images/france-flag.png";
import ukFlag from "/images/united-kingdom-flag.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [publishersOpen, setPublisherOpen] = useState(false);

  const { queryLanguage, selectedCategory } = useSelector((state) => state.articles);
  const categories = ["trending", "health", "business", "sports", "technology"];

  const handleSelectLanguage = (language) => {
    dispatch(setQueryLanguage(language));
    if (pathname !== "/") navigate("/");
  };

  const selectCategory = (category) => {
    dispatch(setCategory(category));
    if (pathname !== "/") navigate("/");
  };

  const togglePublishers = () => {
    if (categoriesOpen) setCategoriesOpen(false);
    setPublisherOpen(!publishersOpen);
  };

  const toggleCategories = () => {
    if (publishersOpen) setPublisherOpen(false);
    setCategoriesOpen(!categoriesOpen);
  };

  const toggleNav = () => {
    if (categoriesOpen) setCategoriesOpen(false);
    if (publishersOpen) setPublisherOpen(false);
    setIsNavOpen(!isNavOpen);
  };

  const setCategoryClasses = (category) =>
    classNames("capitalize cursor-pointer  hover:bg-[#f4efea] px-2 pt-2", {
      "text-yellow-700 border-b-current pb-3 border-b-[3px]": category === selectedCategory,
      "pb-2": category !== selectedCategory,
    });

  return (
    <header className="sticky top-0 z-50 pt-5 pb-2 shadow-md bg-light">
      <CenterContent>
        <div className="flex items-center justify-between pb-3 md:pb-0">
          <Link to="/" className="text-3xl font-semibold md:text-4xl font-newsreader">
            Spotlight
          </Link>

          <nav className="text-center md:hidden" onClick={toggleNav}>
            {isNavOpen ? <GrClose className="text-[26px]" /> : <FiMenu className="text-3xl" />}
          </nav>

          <div className="items-center hidden gap-6 md:flex">
            <SearchInput />
            <div>
              <button
                className={queryLanguage === "us" ? "text-yellow-700 font-semibold" : ""}
                onClick={() => handleSelectLanguage("us")}
              >
                <img src={ukFlag} alt="UK flag" className="inline mr-2 w-[18px]" />
                English
              </button>
              <span className="mx-2"> | </span>
              <button
                onClick={() => handleSelectLanguage("fr")}
                className={queryLanguage === "fr" ? "text-yellow-600 font-semibold" : ""}
              >
                <img src={franceFlag} alt="France flag" className="inline mr-2 w-[18px]" />
                French
              </button>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div className="flex flex-col items-center md:hidden">
            <div className="flex flex-col w-full">
              <div
                className="flex py-2 items-center justify-between border-b-2"
                onClick={toggleCategories}
              >
                <h3 className="text-lg font-bold">Categories</h3>
                <FiChevronDown
                  className={`text-2xl transition-transform duration-100 ease-in ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {categoriesOpen &&
                categories.map((category, index) => (
                  <nav
                    key={index}
                    className={setCategoryClasses(category)}
                    onClick={() => {
                      selectCategory(category);
                      toggleNav();
                    }}
                  >
                    {category}
                  </nav>
                ))}
            </div>

            <div className="flex justify-between py-2 w-full border-b-2" onClick={togglePublishers}>
              <h3 className="text-lg font-bold">Available publishers</h3>
              <FiChevronDown
                className={`text-2xl transition-transform duration-100 ease-in ${
                  publishersOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {publishersOpen && (
              <div className="h-[32vh] bg-light w-full transition-all duration-1000">
                <Publishers />
              </div>
            )}

            <div className="mt-6 w-full flex flex-col items-center gap-3">
              <SearchInput />
              <div className="mb-4">
                <button
                  className={queryLanguage === "us" ? "text-yellow-700 font-semibold" : ""}
                  onClick={() => {
                    handleSelectLanguage("us");
                    toggleNav();
                  }}
                >
                  <img src={ukFlag} alt="UK flag" className="inline mr-2 w-[18px]" />
                  English
                </button>
                <span className="mx-2"> | </span>
                <button
                  onClick={() => {
                    handleSelectLanguage("fr");
                    toggleNav();
                  }}
                  className={queryLanguage === "fr" ? "text-yellow-600 font-semibold" : ""}
                >
                  <img src={franceFlag} alt="France flag" className="inline mr-2 w-[18px]" />
                  French
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="justify-center hidden gap-8 mt-4 font-semibold md:flex">
          {categories.map((category, index) => (
            <nav
              key={index}
              className={setCategoryClasses(category)}
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
