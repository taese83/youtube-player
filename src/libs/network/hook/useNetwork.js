import { useCallback, useEffect } from "react";
import {
  atomFamily,
  selectorFamily,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";
import { Status } from "./status";

export const apiStatus = atomFamily({
  key: "apiStatus",
  default: Status.DEFAULT,
});

export const apiResponse = atomFamily({
  key: "apiResponse",
  default: null,
});

export const apiError = atomFamily({
  key: "apiError",
  default: null,
});

const apiSelector = selectorFamily({
  key: "apiSelector",
  get:
    (key) =>
    ({ get }) => {
      const status = get(apiStatus(key));
      const response = get(apiResponse(key));
      const error = get(apiError(key));
      return {
        status,
        response,
        error,
      };
    },
});

const useNetwork = (
  key,
  promiseFn,
  { resolve = true, resolveConditions = [] } = {}
) => {
  if (!key || typeof key !== "string") {
    throw Error("invalid key");
  }

  const setStatus = useSetRecoilState(apiStatus(key));
  const setRespnose = useSetRecoilState(apiResponse(key));
  const setError = useSetRecoilState(apiError(key));

  const request = useCallback(
    (...args) => {
      if (!promiseFn || typeof promiseFn !== "function") {
        throw new Error("First param should be function!");
      }

      Promise.resolve().then(async () => {
        try {
          setStatus(Status.LOADING);
          setError(null);

          const response = await promiseFn(...args);
          setRespnose(response);
          setError(null);
          setStatus(Status.SUCCESS);
        } catch (error) {
          setRespnose(null);
          setError(error);
          setStatus(Status.ERROR);
        }
      });

      return () => {
        setRespnose(null);
        setError(null);
        setStatus(Status.DEFAULT);
      };
    },
    // eslint-disable-next-line
    []
  );

  // eslint-disable-next-line
  useEffect(resolve ? request : () => {}, resolveConditions);

  return { request, ...useRecoilValue(apiSelector(key)) };
};

const useNetworkSelector = (key) => useRecoilValue(apiSelector(key));
export { useNetwork, useNetworkSelector };
