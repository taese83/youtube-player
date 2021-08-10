// eslint-disable-next-line
export default (network) => ({
  search: (params, useCache) =>
    network.get("https://www.googleapis.com/youtube/v3/search", params, {
      useCache,
    }),
});
