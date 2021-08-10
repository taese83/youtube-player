export const color = ({ color, bgColor }, theme) => `
  ${color}
  ${bgColor && `background-color:${bgColor};`}
`;
