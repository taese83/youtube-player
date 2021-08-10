import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Box from "components/layout/Box";
import disabled from "components/core/attrs/disabled";

const InputText = styled(Box).attrs({
  type: "input",
  br: "4px",
  b: "1px solid #333",
  p: "6px 20px",
})`
  color: #333;

  &.dark {
    background-color: #333;
    color: #e4e4e4;
    border: 0;
  }

  // 커스텀 스타일
  ${disabled}
`;

const TextField = ({ variant, placeholder, ...inputProps }) => {
  return (
    <InputText className={variant} placeholder={placeholder} {...inputProps} />
  );
};

TextField.propTypes = {
  variant: PropTypes.oneOf(["default", "dark"]),
  placeholder: PropTypes.string,
  css: PropTypes.array,
};

TextField.defaultProps = {
  variant: "default",
};

export default TextField;
