import React from 'react';

import { NextPage, NextPageContext } from 'next';

import css from 'styles/sura.styl';

import sura from 'interfaces/sura';
import ayat from 'interfaces/ayat';

import fetchJson from 'lib/fetchJson';

const currentTranslateId = 3;

interface Properties {
  sura: sura;
  ayats: ayat[];
}

const getInitialProps = async ({ req, res, query }: NextPageContext) => {
  const { sura } = query;
  const [suraNum, ayatNum] = (sura as string).split(':');

  if (ayatNum && res) {
    res.writeHead(301, { Location: `/${suraNum}/${ayatNum}` });
    res.end();
  }

  const [suraObject, ayats]: [sura, ayat[]] = await Promise.all([
    fetchJson(`suras/${suraNum}`, req),
    fetchJson(`ayats/by-sura?sura=${suraNum}&translateId=${currentTranslateId}`, req),
  ]);

  return {
    sura: suraObject,
    ayats,
  };
};

const SuraPage: NextPage<Properties> = ({ sura, ayats }) => {
  console.log({ sura, ayats });

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.headerTitle}>
          {sura.translit} | {sura.name}
        </h1>
      </div>
      {sura.bismillah && (
        <h2 className={css.bismillah}>
          <div className={css.bismillahArabic}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
          <div className={css.bismillahTranslate}>С именем Аллаха, Милостивого, Милосердного!</div>
        </h2>
      )}
      <div className={css.content}>
        <div className={css.ayats}>
          {ayats.map((ayat) => (
            <div key={ayat.id} className={css.ayatContainer}>
              {ayat.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SuraPage.getInitialProps = getInitialProps;

export default SuraPage;
