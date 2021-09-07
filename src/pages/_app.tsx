import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Randovie</title>
        <meta name="description" content="Randovie is a random movie generator" />
      </Head>

      <main className="bg-gray-800 h-screen w-screen flex flex-col justify-center items-center">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
