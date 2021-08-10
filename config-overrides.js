const path = require("path");

const baseUrl = "src"; //프로젝트 루트 폴더
const rootPath = `${baseUrl}/`; //프로젝트 루트 폴더path
const buildRootDir = "build"; //builde 폴더
const rootEntryFile = "index.js"; //프로젝트 entry 파일

module.exports = {
  paths: function (paths, env) {
    paths.appBuild = path.resolve(__dirname, buildRootDir);
    paths.appIndexJs = path.resolve(__dirname, `${rootPath}${rootEntryFile}`);
    paths.appSrc = path.resolve(__dirname, baseUrl);
    return paths;
  },
};
