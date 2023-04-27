const CenterContent = ({ children, size }) => {
  return (
    <div className={`w-11/12 mx-auto ${size === "medium" ? "max-w-[1200px]" : "max-w-[1300px]"} `}>
      {children}
    </div>
  );
};

export default CenterContent;
