export const removePublisherFromTitle = (title) =>
  title.split(/\-(?=[^-]*$)/g)[0];

export const normalizeDate = (UTCDate) => {
  const date = new Date(UTCDate);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};
