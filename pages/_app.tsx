import { AppProps } from 'next/app';
import Head from 'next/head';
import c from 'classnames';

import 'styles/lib/reset.styl';
import 'styles/global.styl';

import css from 'styles/app.styl';

import Header from 'components/header';

function QuranOnlineApp({ Component, pageProps }: AppProps) {
  return (
    <div className={c(css.siteContainer, 'darkTheme')}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700|PT+Sans:400,400i,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default QuranOnlineApp;
