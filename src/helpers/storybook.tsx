export const renderChildren = (numberOfChildren: number) => {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => <div key={index} className="w-40 h-40 bg-red-700" />);
};
