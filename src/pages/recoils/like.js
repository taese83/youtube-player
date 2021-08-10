import { atom, selectorFamily } from "recoil";

export const like = atom({
  key: "like",
  default: [],
});

export const islike = selectorFamily({
  key: "islike",
  get:
    (videoId) =>
    ({ get }) => {
      const likeList = get(like);
      return likeList.includes(videoId);
    },
});
