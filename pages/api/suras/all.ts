import { NextApiRequest, NextApiResponse } from 'next';
import escape from 'sql-template-strings';
import { query } from 'lib/database';

import sample from 'lodash/sample';

import sura from 'interfaces/sura';

const getBestAyat = async (request: NextApiRequest, response: NextApiResponse) => {
  const allSuras: sura[] = await query(escape`SELECT * FROM quran_sures`);

  response.status(200).json(allSuras);
};

export default getBestAyat;
