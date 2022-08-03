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

const update = async (id, sales) => {
  const [query] = await sales.map(async ({ productId, quantity }) => {
    await connection.execute(`
    UPDATE StoreManager.sales_products
      SET quantity = (?)
      WHERE sale_id = (?)
      AND product_id = (?)`,
      [quantity, id, productId]);
  });

  return query;
};

const remove = async (id) => {
  const [query] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return query;
};

module.exports = {
  getAll,
  getById,
  update,
  remove,
};
