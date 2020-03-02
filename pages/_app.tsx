import { AppProps } from 'next/app';

import 'styles/lib/reset.styl';
import 'styles/global.styl';

function QuranOnlineApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default QuranOnlineApp;
