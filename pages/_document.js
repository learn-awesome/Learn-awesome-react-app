import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyCustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags }; // return styles collected
  }

  // *************************** //

  render() {
    return (
      <html lang="en-us">
        <Head>{this.props.styleTags}</Head>
        <body style={{ margin: '0px' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
