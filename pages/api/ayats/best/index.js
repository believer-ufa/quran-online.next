import escape from 'sql-template-strings';
import { query } from 'lib/database';

import sample from 'lodash/sample';

const getBestAyat = async (request, response) => {
  const allAyats = await query(escape`SELECT * FROM mainpage_ayats`);
  const bestAyat = sample(allAyats);

  response.status(200).json({ bestAyat });
};

export default getBestAyat;
