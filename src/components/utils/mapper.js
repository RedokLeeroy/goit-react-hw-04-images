export const mapper = images => {
  return images.hits.map(({ largeImageURL, webformatURL, id }) => ({
    largeImageURL,
    webformatURL,
    id,
  }));
};
