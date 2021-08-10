import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import css from "components/effect/css";

const br = ({ br }) => br && `border-radius: ${br};`;
const Image = styled.img`
  ${br}
  ${css}
`;

const Img = ({ br, w, h, src, alt, ...imgProps }) => {
  return (
    <Image src={src} width={w} height={h} alt={alt} br={br} {...imgProps} />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  br: PropTypes.string,
};

export default Img;
