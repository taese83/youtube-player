import React, { useRef, useCallback } from "react";
import { Box, TextField, Button } from "components";
import { Api, useNetwork } from "libs/network";

const VideoSearch = () => {
  const ref = useRef();
  const { request } = useNetwork(
    "youtubeSearch",
    (q) =>
      Api.youtube.search(
        {
          key: "AIzaSyCaKZz6bFfp2ORm9_PrOWBU0PLGEoNbXgw",
          part: "snippet",
          q,
          type: "video",
          maxResults: 20,
        },
        true
      ),
    { resolve: false }
  );

  const onSearch = useCallback(() => {
    request(ref.current);
  }, [request]);

  const onQ = useCallback((e) => {
    ref.current = e.target.value;
  }, []);

  const onEnter = useCallback(
    (e) => {
      if (e.key === "Enter") request(ref.current);
    },
    [request]
  );

  return (
    <Box type="section" m="10px 0 0 0">
      <TextField
        w="725px"
        h="33px"
        mr="5px"
        placeholder="검색어를 입력해주세요"
        onChange={onQ}
        onKeyPress={onEnter}
      />
      <Button onClick={onSearch}>검색</Button>
    </Box>
  );
};

export default VideoSearch;
