import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  semanticTokens: {
    colors: {
      goalIcon: {
        _light: 'teal.300',
        _dark: 'teal.500',
      },

      defaultBg: {
        _light: 'white',
        _dark: 'gray.800',
      },
      defaultHeading: {
        _light: 'black',
        _dark: 'gray.100',
      },
      defaultBody: {
        _light: 'gray.600',
        _dark: 'gray.200',
      },

      secondaryBg: {
        _light: 'gray.800',
        _dark: 'gray.900',
      },
      secondaryHeading: {
        _light: 'white',
        _dark: 'white',
      },
      secondaryBody: {
        _light: 'gray.300',
        _dark: 'gray.300',
      },

      alternativeBg: {
        _light: 'gray.50',
        _dark: 'gray.700',
      },

      countdownBg: {
        _light: 'teal.400',
        _dark: 'teal.300',
      },
      countdownText: {
        _light: 'white',
        _dark: 'gray.700',
      },

      muted: {
        _light: 'gray.400',
        _dark: 'gray.500',
      },

      activeIcon: {
        _light: 'teal.500',
        _dark: 'teal.200',
      },
      accentText: {
        _light: 'teal.500',
        _dark: 'teal.200',
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
