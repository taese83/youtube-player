import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Box from "components/layout/Box";
import disabled from "components/core/attrs/disabled";
import css from "components/effect/css";

const ButtonBase = styled(Box).attrs({
  type: "a",
  w: "80px",
  p: "5px",
  b: "1px solid #333",
  br: "4px",
})`
  color: #333;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  display: block;
  transition: 0.4s;

  &:hover {
    background-color: #333;
    color: #fff;
  }

  &.dark {
    background-color: #333;
    color: #fff;
  }

  &.dark:hover {
    background-color: transparent;
    color: #333;
  }

  ${css}
  ${disabled}
`;

const Button = ({ css, variant, children, disabled, ...buttonProps }) => {
  return (
    <ButtonBase
      css={css}
      className={variant}
      {...buttonProps}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "dark"]),
  css: PropTypes.array,
};

export default React.memo(Button);
