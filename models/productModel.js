const connection = require('../helpers/connection');

const getAll = async () => {
  const [query] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return query;
};

const getById = async (id) => {
  const [query] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return query;
};

const add = async (name) => {
  const [query] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );

  const result = {
    id: query.insertId,
    name,
  };
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
};
