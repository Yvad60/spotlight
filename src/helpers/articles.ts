export const removePublisherFromTitle = (title: string) => title.split(/-(?=[^-]*$)/g)[0];

export const normalizeDate = (UTCDate: string) => {
  const date = new Date(UTCDate);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const normalizeAuthors = (articleAuthor: string) => {
  if (articleAuthor.includes("https://")) return articleAuthor.split(/\/(?=[^/]*$)/g)[1];
  const authors = articleAuthor.split(",");
  return authors[0];
};

export const countReadingMinutes = (content: string) => {
  const readingCharactersPerMinute = 1400; // according to research
  const teaser = content.split(/\[.*\]/)[0];
  const additionalCharacters = Number(content.match(/(?<=\[\+)\d+/g)?.[0]);
  const minutes = Math.ceil((teaser.length + additionalCharacters) / readingCharactersPerMinute);
  return minutes || null;
};

export const getCountryFromCode = (countryCode: string) => {
  if (!countryCode) return null;
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNamesInEnglish.of(countryCode.toUpperCase());
};

export const getLanguageFromCode = (languageCode: string) => {
  if (!languageCode) return null;
  const languageNamesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
  return languageNamesInEnglish.of(languageCode.toUpperCase());
};

export const setHeroSectionTitle = (
  selectedPublisher: string | undefined,
  selectedCategory: string,
  searchKeyword: string
) => {
  if (searchKeyword) return `Featured news about "${searchKeyword}"`;
  if (selectedPublisher) return `Featured news from ${selectedPublisher}`;
  return selectedCategory === "trending"
    ? `Featured ${selectedCategory} news`
    : `Featured news in ${selectedCategory}`;
};

export const setMoreNewsSectionTitle = (
  selectedPublisher: string | undefined,
  selectedCategory: string,
  searchKeyword: string
) => {
  if (searchKeyword) return `More news about "${searchKeyword}"`;
  return selectedPublisher
    ? `More news from ${selectedPublisher}`
    : `More ${selectedCategory} news`;
};
