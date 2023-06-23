import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { setSearchKeyword } from "../../features/articles/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const SearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const { searchKeyword } = useAppSelector((state) => state.articles);
  const [keyword, setKeyword] = useState(searchKeyword);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setKeyword(event.target.value);
  const handleSearch = () => dispatch(setSearchKeyword(keyword));
  const searchByEnter = (event: KeyboardEvent<HTMLInputElement>) =>
    event.key === "Enter" && handleSearch();

  useEffect(() => {
    if (!searchKeyword) setKeyword("");
  }, [searchKeyword]);

  return (
    <div className="flex w-full h-10 max-w-2xl md:w-[320px]">
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
