import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      featureIcon: {
        _light: 'teal.300',
        _dark: 'teal.500',
      },

      defaultBg: {
        _light: 'white',
        _dark: 'gray.800',
      },
      defaultHeadingText: {
        _light: 'black',
        _dark: 'gray.100',
      },
      defaultBodyText: {
        _light: 'gray.600',
        _dark: 'gray.200',
      },

      secondaryBg: {
        _light: 'gray.800',
        _dark: 'gray.400',
      },
      secondaryHeadingText: {
        _light: 'white',
        _dark: 'gray.800',
      },
      secondaryBodyText: {
        _light: 'gray.300',
        _dark: 'gray.700',
      },

      alternativeBg: {
        _light: 'gray.50',
        _dark: 'gray.400',
      },

      countdownBg: {
        _light: 'teal.400',
        _dark: 'teal.600',
      },
      countdownText: {
        _light: 'white',
        _dark: 'gray.600',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
