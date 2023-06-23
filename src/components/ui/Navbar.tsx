import { FC, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../constants/articles";
import { setCategoryClasses } from "../../constants/styles";
import { setCategory } from "../../features/articles/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import CenterContent from "../layout/CenterContent";
import LanguageSelector from "./LanguageSelector";
import MobileNav from "./MobileNav";
import SearchInput from "./SearchInput";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedCategory } = useAppSelector((state: RootState) => state.articles);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const selectCategory = (category: string) => {
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

          <nav className="text-center md:hidden" onClick={toggleNav}>
            {isNavOpen ? <GrClose className="text-[26px]" /> : <FiMenu className="text-3xl" />}
          </nav>

          <div className="items-center hidden gap-6 md:flex">
            <SearchInput />
            <LanguageSelector />
          </div>
        </div>

        {isNavOpen && <MobileNav selectCategory={selectCategory} toggleNav={toggleNav} />}

        <div className="justify-center hidden gap-8 mt-4 font-semibold md:flex">
          {categories.map((category, index) => (
            <nav
              key={index}
              className={setCategoryClasses(category, selectedCategory)}
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
