const baseTheme = {
  breakpoints: {
    xs: 0,
    sm: 400,
    md: 700,
    lg: 1280,
  },
};

// theme.js

const darkColors = {
  primary: {
    main: '#9C8CFB',
  },
  background: {
    main: '#161616',
  },
  text: {
    main: '#fff',
  },
};

const Theme = {
  ...baseTheme,
  ...darkColors,
};

export default Theme;
