import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import Nav from 'components/nav';
import css from 'styles/index.styl';

const getInitialProps = async ({ req }) => {
  const protocol = req ? `${req.headers['x-forwarded-proto']}:` : window.location.protocol;
  const host = req ? req.headers.host : window.location.host;

  return fetch(`${protocol}//${host}/api/ayats/best`).then((response) => response.json());
};

const Home = ({ bestAyat }) => {
  return (
    <div>
      <Head>
        <title>Коран Онлайн</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className={css.hero}>
        <h1 className={css.title}>Священный Коран</h1>
        <p className={css.desc}>
          «{bestAyat.text}» ({bestAyat.sura}:{bestAyat.ayat})
        </p>

        <p>DB HOST IS {process.env.DB_HOST}</p>

        <div className={css.row}>
          <a href="https://nextjs.org/docs" className={css.card}>
            <h3>Documentation &rarr;</h3>
            <p>Learn more about Next.js in the documentation.</p>
          </a>
          <a href="https://nextjs.org/learn" className={css.card}>
            <h3>Next.js Learn &rarr;</h3>
            <p>Learn about Next.js by following an interactive tutorial!</p>
          </a>
          <a href="https://github.com/zeit/next.js/tree/master/examples" className={css.card}>
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = getInitialProps;

export default Home;
