import mysql from 'serverless-mysql';

const database = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});

export const query = async (queryObject) => {
  try {
    const results = await database.query(queryObject);
    await database.end();
    return results;
  } catch (error) {
    return { error };
  }
};
