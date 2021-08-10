import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";
import { initApi } from "./api";

const NETWORK_TIMEOUT = 30000;
const axiosInstance = axios.create({
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    enabledByDefault: false, //기본값으로 no cache
  }),
  timeout: NETWORK_TIMEOUT,
});

let api = {};
let cancelFn;
const Network = {
  createApi(apiName, apiFun) {
    api[apiName] = apiFun(this);
  },

  get(url, params, configs) {
    return this.request(url, "GET", null, params, null, configs);
  },

  request(url, method = "GET", headers, params, data, configs = {}) {
    return new Promise((resolve, reject) => {
      headers = {
        "Cache-Control": "no-cache",
        ...headers,
      };

      const {
        useCache = false, //서버요청은 기본적으로 no cache, true일경우 cache 데이터 사용함
        timeout = NETWORK_TIMEOUT,
      } = configs;

      axiosInstance({
        url,
        method,
        headers,
        params,
        data,
        timeout,
        forceUpdate: !useCache,
        cache: true,
        cancelToken: new axios.CancelToken(function executor(c) {
          cancelFn = c;
        }),
      })
        .then((response) => {
          /**데이터 파싱 */
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  cancel: () => {
    cancelFn();
  },
};

initApi(Network); /** API 객체 생성 */

export { Network, api as Api };
