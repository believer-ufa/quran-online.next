import { NextApiRequest, NextApiResponse } from 'next';
import escape from 'sql-template-strings';
import { query } from 'lib/database';

import sample from 'lodash/sample';

import bestAyat from 'interfaces/bestAyat';

const getBestAyat = async (request: NextApiRequest, response: NextApiResponse) => {
  const allAyats = await query(escape`SELECT * FROM mainpage_ayats`);
  const bestAyat: bestAyat = sample(allAyats);

  response.status(200).json(bestAyat);
};

export default getBestAyat;
