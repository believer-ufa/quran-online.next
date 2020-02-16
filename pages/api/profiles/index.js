import escape from 'sql-template-strings';
import database from 'lib/database';

const profilesApi = async (request, response) => {
  let page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 9;

  if (page < 1) page = 1;

  const profiles = await database.query(escape`
      SELECT *
      FROM profiles
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `);

  const count = await database.query(escape`
      SELECT COUNT(*)
      AS profilesCount
      FROM profiles
    `);

  const { profilesCount } = count[0];
  const pageCount = Math.ceil(profilesCount / limit);

  response.status(200).json({ profiles, pageCount, page });
};

export default profilesApi;
