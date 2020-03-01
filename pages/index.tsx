import React, { ReactNode } from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import get from 'lodash/get';
import splitEvery from 'ramda/src/splitEvery';

import paths from 'lib/paths';

import css from 'styles/index.styl';

import bestAyat from 'interfaces/bestAyat';
import sura from 'interfaces/sura';

import fetchJson from 'lib/fetchJson';

interface Properties {
  bestAyat: bestAyat;
  allSuras: sura[];
}

const getInitialProps = async ({ req }: NextPageContext) => {
  const [bestAyat, allSuras]: [bestAyat, sura[]] = await Promise.all([
    fetchJson('ayats/best', req),
    fetchJson('suras/all', req),
  ]);

  return {
    bestAyat,
    allSuras,
  };
};

const Home: NextPage<Properties> = ({ bestAyat, allSuras }) => {
  const surasInOneLine = allSuras.length / 4;
  const surasGroups = splitEvery(surasInOneLine, allSuras);

  return (
    <div>
      <Head>
        <title>Коран Онлайн</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={css.hero}>
        <h1 className={css.title}>Священный Коран</h1>
        <p className={css.subtitle}>
          <span dangerouslySetInnerHTML={{ __html: bestAyat.text }} /> ({bestAyat.sura}:{bestAyat.ayat})
        </p>

        {/* <p>DB HOST IS {process.env.DB_HOST}</p> */}

        <div className={css.surasGroups}>
          {surasGroups.map((group, idx) => (
            <div key={idx} className={css.surasGroup}>
              {group.map((sura) => (
                <div className={css.suraNameContainer} key={sura.id}>
                  <div className={css.suraNum}>{sura.id}</div>
                  <Link {...paths.sura(sura.id)}>
                    <a className={css.suraName}>{sura.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = getInitialProps;

export default Home;
