export const removePublisherFromTitle = (title) => title.split(/-(?=[^-]*$)/g)[0];

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
  if (articleAuthor.includes("https://")) return articleAuthor.split(/\/(?=[^/]*$)/g)[1];
  const authors = articleAuthor.split(",");
  return authors[0];
};

export const countReadingMinutes = (content) => {
  const readingCharactersPerMinute = 1400; // according to research
  const teaser = content.split(/\[.*\]/)[0];
  const additionalCharacters = Number(content.match(/(?<=\[\+)\d+/g)?.[0]);
  const minutes = Math.ceil((teaser.length + additionalCharacters) / readingCharactersPerMinute);
  return minutes || null;
};
