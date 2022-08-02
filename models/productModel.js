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

module.exports = {
  getAll,
  getById,
};
