import React, { useMemo } from "react";
import { useEffect, useState } from "react";

import { Box, Text } from "components";
import { useNetworkSelector, Status } from "libs/network";
import { Normalize } from "libs/normalize/normalize";

import VideoContents from "../organisms/VideoContents";
import VideoList from "../organisms/VideoList";

import { mock } from "../data/mock";

const VideoContainer = () => {
  const [items, setItems] = useState(() => Normalize(mock.items));
  const [selectItem, setSelectItem] = useState(null);
  const { status, response } = useNetworkSelector("youtubeSearch");

  useEffect(() => {
    if (response) {
      setItems(() => {
        return { ...Normalize(response.items) };
      });
    }
  }, [response]);

  const contents = useMemo(() => {
    if (items) {
      return items[selectItem?.videoId];
    }
  }, [items, selectItem]);

  return (
    <Box
      type="section"
      w="100%"
      h="700px"
      m="10px 0 0 0"
      b="1px solid #333"
      br="4px"
      center
    >
      {status === Status.ERROR && (
        <Text color="red" weight="bold">
          검색 데이터를 가져오는 도중 문제가 발생하였습니다.
        </Text>
      )}
      {status === Status.LOADING && "검색결과 로딩중..."}
      {status !== Status.ERROR &&
        status !== Status.LOADING &&
        items?.size === 0 &&
        `검색 결과가 없습니다.`}
      {status !== Status.ERROR && status !== Status.LOADING && items?.size > 0 && (
        <>
          <VideoContents contents={contents} />
          <Box w="450px" h="100%" direction="column">
            <Box h="30px" p="5px 10px 5px 10px" center>
              <Box w="70px">
                <Text weight="bold">재생목록</Text>
              </Box>
              <Text size="12px">
                ({selectItem?.index} / {items?.size})
              </Text>
            </Box>
            <VideoList items={items} setSelectItem={setSelectItem} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default VideoContainer;
