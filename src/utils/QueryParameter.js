export const getQueryParameter = (completeQueryUrl, searchQueryUrl) =>
  new URLSearchParams(completeQueryUrl).get(searchQueryUrl);
