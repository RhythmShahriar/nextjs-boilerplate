import { ChakraProvider } from '@chakra-ui/core';
import { theme } from 'theme/theme';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
