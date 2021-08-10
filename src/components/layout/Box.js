import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import css from "components/effect/css";

const w = ({ w }) => w && `width: ${w};`;
const h = ({ h }) => h && `height: ${h};`;

const m = ({ m, ml = "0", mr = "0", mt = "0", mb = "0" }) => {
  return m ? `margin : ${m};` : `margin : ${mt} ${mr} ${mb} ${ml};`;
};
const p = ({ p, pl = "0", pr = "0", pt = "0", pb = "0" }) => {
  return p ? `padding : ${p};` : `padding : ${pt} ${pr} ${pb} ${pl};`;
};

const b = ({ b, br }) => {
  return `${b ? `border : ${b};` : ``} ${br ? `border-radius : ${br};` : ``}`;
};

const f = ({ f }) => {
  return `${f !== undefined ? `flex : ${f};` : ""}`;
};

const oxy = ({ oy, ox }) => {
  return `${oy ? `overflow-y : ${oy};` : ``} ${
    ox ? `overflow-x : ${ox};` : ``
  }`;
};

const direction = ({ direction }) =>
  direction && `flex-direction: ${direction};`;
const center = ({ center }) =>
  center && `align-items: center; justify-content: center;`;

const FlexBox = styled(({ type, ...flexProps }) => {
  return React.createElement(type, {
    ...flexProps,
  });
})`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex: 0 1 auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }

  ${w}
  ${h}
  ${m}
  ${p}
  ${b}
  ${f}
  ${oxy}
  ${direction}
  ${center}
  ${css}
`;

const Box = ({
  w,
  h,
  m,
  ml,
  mr,
  mt,
  mb,
  p,
  pl,
  pr,
  pt,
  pb,
  b,
  br,
  oy,
  ox,
  css,
  center,
  children,
  ...flexProps
}) => {
  console.log("Box");
  return (
    <FlexBox
      w={w}
      h={h}
      m={m}
      ml={ml}
      mr={mr}
      mt={mt}
      mb={mb}
      p={p}
      pl={pl}
      pr={pr}
      pt={pt}
      pb={pb}
      b={b}
      br={br}
      oy={oy}
      ox={ox}
      css={css}
      center={center}
      {...flexProps}
    >
      {children}
    </FlexBox>
  );
};

Box.defaultProps = {
  type: "div",
  direction: "row",
  center: false,
};

Box.propTypes = {
  type: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
  center: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  p: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  b: PropTypes.string,
  br: PropTypes.string,
  oy: PropTypes.string,
  ox: PropTypes.string,
};

export default Box;
