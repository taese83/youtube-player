import React, { useCallback, useEffect } from "react";
import { css } from "styled-components";
import { Box, List, ListItem, Text, Img, Icon } from "components";

import { useRecoilValue } from "recoil";
import { islike } from "../recoils/like";
import VidoeLike from "./VideoLike";

const channelTitleBoxStyle = css`
  justify-content: flex-start;
`;

const VideoList = ({ items, setSelectItem }) => {
  const onSelect = useCallback((e) => {
    const videoId = e.target.dataset?.youtubeId;
    const index = e.target.dataset?.youtubeIndex;
    setSelectItem((prev) => {
      if (prev.index === index) {
        return prev;
      }
      return { videoId, index };
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (items && items.size > 0) {
      const videoId = items.videoIds[0];
      const index = 1;
      setSelectItem({ videoId, index });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box w="450px" h="100%" ox="hidden" oy="auto">
      <List onItemClick={onSelect}>
        {items?.videoIds.map((videoId, index) => {
          return (
            <ListItem
              key={videoId}
              data-youtube-id={videoId}
              data-youtube-index={index + 1}
              h="100px"
              p="10px 10px"
            >
              <Img
                src={items[videoId].thumbnail}
                alt={items[videoId].title}
                h="80px"
                br="4px"
              />
              <Box direction="column" ml="5px">
                <Box h="60px">
                  <Text size="12px" weight="bold">
                    {items[videoId].title}
                  </Text>
                </Box>
                <Box center css={channelTitleBoxStyle}>
                  <Box>
                    <Text size="10px" color="#999">
                      {items[videoId].channelTitle}
                    </Text>
                  </Box>
                  <VidoeLike videoId={videoId} />
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

const Like = ({ videoId }) => {
  const l = useRecoilValue(islike(videoId));
  return <Icon icon={l ? "likeOn" : "likeOff"} size="21px" />;
};

export default React.memo(VideoList);
