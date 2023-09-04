import { createGlobalStyle } from '@xstyled/styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Manrope', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;
    appearance: none;
}

/* Remove excess padding and border in Firefox 4+ */
&::-moz-focus-inner {
    border: 0;
    padding: 0;
}
`;
