import React, { useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import disabled from "components/core/attrs/disabled";
import css from "components/effect/css";

const ListContainer = styled.ul`
  position: relative;
  margin: 0;
  list-style: none;
  width: 100%;

  & li::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: #333;
  }

  & li:last-child::before {
    display: none;
  }

  ${css}
  ${disabled}
`;

const List = ({ children, onItemClick }) => {
  const clickEvent = useCallback(
    (e) => {
      if (onItemClick) {
        e.stopPropagation();
        onItemClick({ target: e.target.closest("li") || e.target });
      }
    },
    [onItemClick]
  );
  return <ListContainer onClick={clickEvent}>{children}</ListContainer>;
};

List.propTypes = {
  onItemClick: PropTypes.func,
};

export default React.memo(List);
