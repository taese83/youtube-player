export const size = (
  { width, height, maxWidth, maxHeight, minWidth, minHeight, boxSizing },
  theme
) => `
  ${width && `width:${width};`}
  ${maxWidth && `max-width:${maxWidth};`}
  ${minWidth && `min-width:${minWidth};`}
  ${height && `height:${height};`}
  ${maxHeight && `max-height:${maxHeight};`}
  ${minHeight && `min-height:${minHeight};`}
  ${boxSizing && `box-sizing:${height};`}
  `;
