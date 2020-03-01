import { NextApiRequest, NextApiResponse } from 'next';
import escape from 'sql-template-strings';
import { query } from 'lib/database';

import sura from 'interfaces/sura';

const getSura = async (request: NextApiRequest, response: NextApiResponse) => {
  const { sura } = request.query;

  const [suraObject]: sura[] = await query(escape`SELECT * FROM quran_sures WHERE id = ${sura} LIMIT 1`);

  response.status(200).json(suraObject);
};

export default getSura;
