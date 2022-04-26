import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
        <script
          defer
          data-domain='hackathon.chakra-ui.com'
          src='https://plausible.io/js/plausible.js'
        />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
