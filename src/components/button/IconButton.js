import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Icon from "components/atom/Icon";

const IconContainer = styled(Icon)`
  cursor: pointer;
`;

const IconButton = ({ icon, size, ...iconButtonProps }) => {
  return <IconContainer icon={icon} size={size} {...iconButtonProps} />;
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default React.memo(IconButton);
