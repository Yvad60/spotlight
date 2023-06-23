import classNames from "classnames";
import { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { useFetchPublishersQuery } from "../../features/api/apiSlice";
import { selectPublisher } from "../../features/articles/articlesSlice";
import { getCountryFromCode, getLanguageFromCode } from "../../helpers/articles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import PublisherRowSkeleton from "../skeletons/PublisherRow";

const Publishers: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPublisher } = useAppSelector((state) => state.articles);
  const { data, isFetching } = useFetchPublishersQuery({});
  const [visiblePublishers, setVisiblePublishers] = useState(data);

  const handleSelectPublisher = (publisher: Publisher) => dispatch(selectPublisher(publisher));
  const resetPublishers = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    dispatch(selectPublisher(""));
  };

  const badgeClasses = classNames(
    "px-2 capitalize flex items-center border rounded-full gap-[2px] md:py-[1px] border-gray-300 w-18 sm:w-auto"
  );
  const setPublisherWrapperClasses = (publisher: Publisher) =>
    classNames("pb-2 pt-1 md:pt-2 md:pb-3 px-2 cursor-pointer text-slate-600 hover:bg-[#f1eee8]", {
      "bg-[#eae6df] sticky w-full top-0 bottom-0": publisher.id === selectedPublisher?.id,
    });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVisiblePublishers(
      data?.filter((publisher) => publisher.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  useEffect(() => {
    if (data) setVisiblePublishers(data);
  }, [data]);

  return (
    <div className="flex flex-col h-full">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search for publisher..."
        className="px-2 text-sm border border-gray-400 rounded outline-none h-fit py-[6px] placeholder:text-gray-400"
      />
      <div className="w-full h-full mt-2 overflow-hidden rounded-lg shadow md:border">
        <div className="divide-y-2 divide-zinc-300 overflow-y-auto h-full max-h-[600px] relative scrollbar-thumb-[#8d6a43] hover:scrollbar-thumb-[#725738] scrollbar-track-[#EBE1D7] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-w-8">
          {isFetching
            ? Array(8)
                .fill(0)
                .map((_item, index) => <PublisherRowSkeleton key={index} />)
            : visiblePublishers?.map((publisher) => (
                <div
                  onClick={() => handleSelectPublisher(publisher)}
                  key={publisher.id}
                  className={setPublisherWrapperClasses(publisher)}
                >
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold md:text-base">{publisher.name}</h3>
                      <div className="flex gap-2 mt-[2px] md:mt-1 text-[12px]">
                        <p className={badgeClasses}>
                          <BiCategoryAlt className="hidden sm:inline" />
                          {publisher.category}
                        </p>
                        <p className={badgeClasses}>
                          <BsGlobe className="hidden sm:inline" />
                          {getCountryFromCode(publisher.country)}
                        </p>
                        <p className={badgeClasses}>
                          <IoLanguage className="hidden sm:inline" />
                          {getLanguageFromCode(publisher.language)}
                        </p>
                      </div>
                    </div>
                    {publisher.id === selectedPublisher?.id && (
                      <button
                        onClick={resetPublishers}
                        className="px-2 border rounded-md absolute right-0 mr-2 py-[2px] bg-[#da7077] text-light text-[11px]"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Publishers;
