export const removePublisherFromTitle = (title) => title.split(/\-(?=[^-]*$)/g)[0];

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

export const normalizeAuthors = (articleAuthor) => {
  if (articleAuthor.includes("https://")) return articleAuthor.split(/\/(?=[^\/]*$)/g)[1];
  const authors = articleAuthor.split(",");
  return authors[0];
};
