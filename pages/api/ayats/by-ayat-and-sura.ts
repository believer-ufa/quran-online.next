import { NextApiRequest, NextApiResponse } from 'next';
import escape from 'sql-template-strings';
import { query } from 'lib/database';

const getSuraAyatsByAyatAndSura = async (request: NextApiRequest, response: NextApiResponse) => {
  const { sura, ayat, translateId } = request.query;
  const suraAyats = await query(escape`SELECT * FROM quran_ayats WHERE sura = ${sura} AND ayat = ${ayat}`);

  response.status(200).json(suraAyats);
};

export default getSuraAyatsByAyatAndSura;
