const placeholder = style => `
  ::-webkit-input-placeholder {
    ${style}
  }

  ::-moz-placeholder {
    ${style}
  }

  :-ms-input-placeholder {
    ${style}
  }

  :-moz-placeholder {
    ${style}
  }
`;

export default placeholder;
