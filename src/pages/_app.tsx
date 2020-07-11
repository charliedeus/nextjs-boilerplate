import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'assets/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado Boilerplate</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter towork with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default App;
