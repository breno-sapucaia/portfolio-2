import 'styled-components';
import '@xstyled/system';
import { ITheme, DefaultTheme as XStyledDefaultTheme } from '@xstyled/styled-components';

interface AppTheme extends ITheme, XStyledDefaultTheme {
  /* Customize your theme */
  colors: {
    primary: string;
    'primary-contrast-text': string;
    'primary-light': string;
    'primary-lightest': string;
    background: string;
    'button-hover': string;
    'button-focus': string;
    'button-hover-shadow': string;
    button: string;
    text: string;
    'text-grayed': string;
    'text-light': string;
    border: string;
  };
}

// and extend them!
declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
