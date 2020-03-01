import { NextApiRequest, NextApiResponse } from 'next';
import escape from 'sql-template-strings';
import { query } from 'lib/database';

import sura from 'interfaces/sura';

const getAllSuras = async (request: NextApiRequest, response: NextApiResponse) => {
  const allSuras: sura[] = await query(escape`SELECT * FROM quran_sures`);

  response.status(200).json(allSuras);
};

export default getAllSuras;
