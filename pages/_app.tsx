import { AppProps } from 'next/app';
import c from 'classnames';

import 'styles/lib/reset.styl';
import 'styles/global.styl';

import css from 'styles/app.styl';

import Header from 'components/header';

function QuranOnlineApp({ Component, pageProps }: AppProps) {
  return (
    <div className={c(css.siteContainer, 'darkTheme')}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default QuranOnlineApp;
