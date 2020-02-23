import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import Nav from 'components/nav';
import css from 'styles/index.styl';

import bestAyat from 'interfaces/bestAyat';
import sura from 'interfaces/sura';

import fetchJson from 'lib/fetchJson';

interface Properties {
  bestAyat: bestAyat;
  allSuras: sura[];
}

const getInitialProps = async ({ req }: NextPageContext) => {
  const bestAyat: bestAyat = await fetchJson('ayats/best', req);
  const allSuras: sura[] = await fetchJson('suras/all', req);

  return {
    bestAyat,
    allSuras,
  };
};

const Home: NextPage<Properties> = ({ bestAyat, allSuras }) => {
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
          {bestAyat.text} ({bestAyat.sura}:{bestAyat.ayat})
        </p>

        <p>DB HOST IS {process.env.DB_HOST}</p>

        {allSuras.map((sura) => (
          <div key={sura.id}>{sura.name}</div>
        ))}
      </div>
    </div>
  );
};

Home.getInitialProps = getInitialProps;

export default Home;
