import React from "react";
import { css } from "styled-components";
import { Box } from "components";
import VideoSearch from "./organisms/VideoSearch";
import VideoContainer from "./templates/VideoContainer";

const boxContainerStyle = css`
  position: absolute;
  left: 0;
  right: 0;
`;

const Main = () => {
  return (
    <Box
      w="1200px"
      direction="column"
      css={boxContainerStyle}
      m="0 auto"
      p="10px"
    >
      <VideoSearch />
      <VideoContainer />
    </Box>
  );
};

export default Main;
