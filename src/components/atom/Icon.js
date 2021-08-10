import React from "react";
import styled from "styled-components";
import IconSet from "./IconSet";
import PropTypes from "prop-types";

const icon = ({ icon }) =>
  `background-image: url(${IconSet[icon] || icon}) !important;`;

const size = ({ size = "32px" }) =>
  `background-size: ${size}; width:${size}; height:${size};`;

const IconStyle = styled.i`
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  ${icon}
  ${size}
`;

const Icon = ({ icon, size, ...iconProps }) => {
  return <IconStyle icon={icon} size={size} {...iconProps} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default React.memo(Icon);
