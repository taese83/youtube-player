export const position = (
  { position, zIndex, top, right, bottom, left },
  theme
) => `
  ${position && `position:${position};`}
  ${zIndex && `z-index:${zIndex};`}
  ${top && `top:${top};`}
  ${right && `right:${right};`}
  ${bottom && `bottom:${bottom};`}
  ${left && `left:${left};`}
`;
