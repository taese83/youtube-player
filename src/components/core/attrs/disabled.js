const disabled = ({ disabled }, theme) =>
  `opacity : ${disabled ? 0.35 : 1};
   pointer-events : ${disabled ? "none" : ""};
  `;

export default disabled;
