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

export const getCountryFromCode = (countryCode) => {
  if (!countryCode) return null;
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNamesInEnglish.of(countryCode.toUpperCase());
};

export const getLanguageFromCode = (languageCode) => {
  if (!languageCode) return null;
  const languageNamesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
  return languageNamesInEnglish.of(languageCode.toUpperCase());
};

export const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const setHeroSectionTitle = (selectedPublisher, selectedCategory, searchKeyword) => {
  if (searchKeyword) return `Featured news about "${searchKeyword}"`;
  if (selectedPublisher) return `Featured news from ${selectedPublisher}`;
  return selectedCategory === "trending"
    ? `Featured ${selectedCategory} news`
    : `Featured news in ${selectedCategory}`;
};

export const setMoreNewsSectionTitle = (selectedPublisher, selectedCategory, searchKeyword) => {
  if (searchKeyword) return `More news about "${searchKeyword}"`;
  return selectedPublisher
    ? `More news from ${selectedPublisher}`
    : `More ${selectedCategory} news`;
};
