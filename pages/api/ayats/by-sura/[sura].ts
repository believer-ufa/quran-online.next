import { NextApiRequest, NextApiResponse } from 'next';
import escape from 'sql-template-strings';
import { query } from 'lib/database';

const getSuraAyats = async (request: NextApiRequest, response: NextApiResponse) => {
  const { sura, translateId } = request.query;
  const suraAyats = await query(
    escape`SELECT * FROM quran_ayats WHERE sura = ${sura} AND translate_id = ${translateId}`,
  );

  response.status(200).json(suraAyats);
};

export default getSuraAyats;
