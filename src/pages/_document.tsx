import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/randovie.svg" type="image/svg" />
        </Head>
        <body className="h-screen bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
