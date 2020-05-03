import LinkProperties from 'interfaces/link-properties';

export const index = '/';

export const sura = (sura: number): LinkProperties => {
  return {
    href: '/[slug]',
    as: `/${sura}`,
  };
};

export const ayat = (sura: number, ayat: number): LinkProperties => {
  return {
    href: '/[slug]',
    as: `/${sura}:${ayat}`,
  };
};

export default {
  index,
  sura,
  ayat,
};
