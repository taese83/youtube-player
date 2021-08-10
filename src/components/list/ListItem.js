import React, { useCallback } from "react";
import styled from "styled-components";

import Box from "components/layout/Box";
import disabled from "components/core/attrs/disabled";

const ListItemContainer = styled(Box).attrs({ type: "li" })`
  align-items: center;
  justify-content: flex-start;
  ${disabled}
`;

const ListItem = ({ css, disabled, children, onClick, ...BoxProps }) => {
  const clickEvent = useCallback(
    e => {
      if (onClick) {
        e.stopPropagation();
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <ListItemContainer disabled={disabled} onClick={clickEvent} {...BoxProps}>
      {children}
    </ListItemContainer>
  );
};

ListItem.propTypes = Box.propTypes;

export default React.memo(ListItem);
