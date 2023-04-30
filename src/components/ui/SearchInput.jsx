import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "../../features/articles/articlesSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const { searchKeyword } = useSelector((state) => state.articles);
  const [keyword, setKeyword] = useState(searchKeyword);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleSearch = () => {
    dispatch(setSearchKeyword(keyword));
  };
  const searchByEnter = (event) => event.key === "Enter" && handleSearch();

  useEffect(() => {
    if (!searchKeyword) setKeyword("");
  }, [searchKeyword]);

  return (
    <div className="flex h-10 max-w-2xl w-full md:w-[320px]">
      <input
        type="text"
        className="w-full h-full pl-3 border border-gray-400 rounded-tl-lg rounded-bl-lg outline-none placeholder:text-gray-400"
        onChange={handleChange}
        onKeyDown={searchByEnter}
        value={keyword}
        placeholder="Enter keyword..."
      />
      <button
        className="h-full px-4 text-xl text-white rounded-tr-lg rounded-br-lg bg-primary"
        onClick={handleSearch}
      >
        <CgSearch />
      </button>
    </div>
  );
};

export default SearchInput;
