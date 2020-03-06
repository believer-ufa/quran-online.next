import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import css from './header.styl';

interface Properties {
  //
}

const Header: NextPage<Properties> = ({}) => {
  return (
    <div className={css.container}>
      <Link href="/">
        <a className={css.title}>Коран Онлайн</a>
      </Link>
    </div>
  );
};

export default Header;
