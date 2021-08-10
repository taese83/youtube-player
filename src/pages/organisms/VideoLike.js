import React, { useCallback } from "react";
import { IconButton } from "components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { like, islike } from "../recoils/like";

const VidoeLike = ({ videoId }) => {
  const setLikeItems = useSetRecoilState(like);
  const l = useRecoilValue(islike(videoId));

  const likeToggle = useCallback(
    (e) => {
      e.stopPropagation();
      setLikeItems((prev) => {
        const index = prev.indexOf(videoId);
        if (index > -1) {
          const newArray = [...prev];
          newArray.splice(index, 1);
          return newArray;
        }

        return [...prev, videoId];
      });
    },
    [videoId, setLikeItems]
  );

  return <IconButton icon={l ? "likeOn" : "likeOff"} onClick={likeToggle} />;
};

export default VidoeLike;
