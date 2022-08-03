const connection = require('../helpers/connection');

const getAll = async () => {
  const [query] = await connection.execute(
    `SELECT sales.id as saleId, sales.date,
      salesProducts.product_id as productId, salesProducts.quantity 
      FROM StoreManager.sales AS sales
      RIGHT JOIN StoreManager.sales_products as salesProducts
      ON sales.id = salesProducts.sale_id
      ORDER BY sales.id ASC, salesProducts.product_id`,
  );
  return query;
};

const getById = async (id) => {
  const [query] = await connection.execute(
    `SELECT sales.date,
      salesProducts.product_id as productId, salesProducts.quantity 
      FROM StoreManager.sales AS sales
      RIGHT JOIN StoreManager.sales_products as salesProducts
      ON sales.id = salesProducts.sale_id WHERE sales.id = ?
      ORDER BY sales.id ASC, salesProducts.product_id`,
    [id],
  );
  return query;
};

const add = async (name) => {
  const [query] = await connection.execute(
    'INSERT INTO StoreManager.sales (name) VALUES (?)',
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
