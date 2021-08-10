import React, { useMemo } from "react";
import YouTube from "react-youtube";
import { css } from "styled-components";
import { Box, Text } from "components";
import VidoeLike from "./VideoLike";

const channelTitleBoxStyle = css`
  justify-content: flex-start;
`;

const VideoContents = ({ contents }) => {
  const title = useMemo(() => contents?.title, [contents?.title]);
  const channelTitle = useMemo(
    () => contents?.channelTitle,
    [contents?.channelTitle]
  );

  return (
    <Box w="750px" mr="5px" direction="column">
      <Box h="445px" br="4px" center>
        {contents?.videoId && (
          <YouTube
            videoId={contents.videoId}
            opts={{
              height: "445px",
              width: "723px",
            }}
          />
        )}
      </Box>
      <Box h="250px" pl="10px" pt="10px" direction="column">
        <Box h="70px">
          <Text weight="bold">{title}</Text>
        </Box>
        <Box h="50px" center css={channelTitleBoxStyle}>
          <Box>
            <Text size="12px" color="#999">
              {channelTitle}
            </Text>
          </Box>
          <VidoeLike videoId={contents?.videoId} />
        </Box>
        <Box h="120px">{contents?.description}</Box>
      </Box>
    </Box>
  );
};

export default React.memo(VideoContents);
