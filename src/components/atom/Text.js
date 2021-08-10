import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import css from "components/effect/css";

const color = ({ color }) => color && `color: ${color};`;
const weight = ({ weight }) => weight && `font-weight: ${weight};`;
const size = ({ size }) => size && `font-size: ${size};`;

const Font = styled(({ type, ...textProps }) => {
  return React.createElement(type, {
    ...textProps,
  });
})`
  ${color}
  ${weight}
  ${size}
  ${css}
`;

const Text = ({ type, color, weight, size, children, ...textProps }) => {
  return (
    <Font type={type} color={color} weight={weight} size={size} {...textProps}>
      {children}
    </Font>
  );
};

Text.defaultProps = {
  type: "label",
};

Text.propTypes = {
  type: PropTypes.oneOf([
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "code",
    "label",
  ]).isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
};

export default React.memo(Text);
