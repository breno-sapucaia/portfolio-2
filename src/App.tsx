import { About, Header } from '@/components/';

import { ColorModeProvider, Preflight, ThemeProvider } from '@xstyled/styled-components';
import { theme, global as GlobalStyles } from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Preflight />
        {/* <GlobalStyles /> */}
        <Header />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
