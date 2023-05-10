const NewsCard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full rounded-sm shadow-sm h-[192px] bg-[#dacebd] animate-pulse" />
      <div className="flex items-end justify-between mt-3 text-sm text-yellow-900">
        <div className="flex flex-col w-full gap-2">
          <div className="w-full h-3 bg-[#dacebd] rounded animate-pulse" />
          <div className="w-[70%] h-3 bg-[#dacebd] rounded animate-pulse" />
          <div className="flex items-center w-full gap-3 mt-1">
            <div className="h-8 w-8 rounded-full bg-[#dacebd] animate-pulse"></div>
            <div className="w-36 h-3 rounded-sm bg-[#dacebd] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
