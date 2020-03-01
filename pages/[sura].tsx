import React, { ReactNode } from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import paths from 'lib/paths';

import css from 'styles/index.styl';

import sura from 'interfaces/sura';
import ayat from 'interfaces/ayat';

import fetchJson from 'lib/fetchJson';

const currentTranslateId = 3;

interface Properties {
  sura: sura;
  ayats: ayat[];
}

const getInitialProps = async ({ req, query }: NextPageContext) => {
  const { sura } = query;

  const [suraObject, ayats]: [sura, ayat[]] = await Promise.all([
    fetchJson(`suras/${sura}`, req),
    fetchJson(`ayats/by-sura/${sura}?translateId=${currentTranslateId}`, req),
  ]);

  return {
    sura: suraObject,
    ayats,
  };
};

const SuraPage: NextPage<Properties> = ({ sura, ayats }) => {
  console.log({ sura, ayats });

  return <div>sura {sura.name} page</div>;
};

SuraPage.getInitialProps = getInitialProps;

export default SuraPage;
