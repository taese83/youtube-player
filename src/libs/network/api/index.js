const req = require.context(".", true, /\.\/[^/]+\/index.js$/);
export const initApi = (network) => {
  req.keys().forEach((key) => {
    const apiFolderName = key.replace(/^.+\/([^/]+)\/index.js/, "$1");
    req(key).default && network.createApi(apiFolderName, req(key).default);
  });
};
