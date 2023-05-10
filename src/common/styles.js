import classNames from "classnames";

export const setCategoryClasses = (category, selectedCategory) =>
  classNames("capitalize cursor-pointer hover:bg-[#f4efea] px-2 pt-2", {
    "text-yellow-700 border-b-current pb-3 border-b-[3px]": category === selectedCategory,
    "pb-2": category !== selectedCategory,
  });
