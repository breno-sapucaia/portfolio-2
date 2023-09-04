import { defaultTheme, Theme } from '@xstyled/styled-components';
const theme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#9C8CFB',
    'primary-contrast-text': '#9C8CFB',
    'primary-lightest': 'rgba(156, 140, 251, 0.10)',
    'primary-light': 'rgba(156, 140, 251, 0.40)',
    background: 'white',
    border: '#f2f2f2',
    text: '#000',
    'button-hover': '#eee',
    'button-focus': '#ccc',
    button: 'white',
    'text-grayed': '#999',
    'text-light': '#1F1F1F',
    'button-hover-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);',
  },
  shadows: {
    ...defaultTheme.shadows,
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
  },
};

export default theme;
