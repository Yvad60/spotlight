import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setQueryLanguage } from "../../features/articles/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import franceFlag from "/images/france-flag.png";
import ukFlag from "/images/united-kingdom-flag.png";

interface LanguageSelectorProps {
  toggleNav?: () => void;
  isMobile?: boolean;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ toggleNav, isMobile }) => {
  const { queryLanguage } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const selectLanguage = (language: "us" | "fr") => {
    dispatch(setQueryLanguage(language));
    if (pathname !== "/") navigate("/");
    if (isMobile && !!toggleNav) toggleNav();
  };

  return (
    <div>
      <button
        className={queryLanguage === "us" ? "text-yellow-700 font-semibold" : ""}
        onClick={() => selectLanguage("us")}
      >
        <img src={ukFlag} alt="UK flag" className="inline mr-2 w-[18px]" />
        English
      </button>
      <span className="mx-2"> | </span>
      <button
        onClick={() => selectLanguage("fr")}
        className={queryLanguage === "fr" ? "text-yellow-600 font-semibold" : ""}
      >
        <img src={franceFlag} alt="France flag" className="inline mr-2 w-[18px]" />
        French
      </button>
    </div>
  );
};

export default LanguageSelector;
