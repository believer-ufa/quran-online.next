import LinkProperties from 'interfaces/link-properties';

export const index = '/';

export const sura = (number: number): LinkProperties => {
  return {
    href: '/[sura]',
    as: `/${number}`,
  };
};

export default {
  index,
  sura,
};
