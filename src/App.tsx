import { Header } from '@/components/';

import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme as Theme, global as GlobalStyle } from '@/theme';
import isPropValid from '@emotion/is-prop-valid';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={Theme}>
        <div>
          <GlobalStyle />
          <Header />
        </div>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
