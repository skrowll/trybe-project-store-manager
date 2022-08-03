const validateSale = async (sales) => {
  if (sales.some(({ quantity }) => quantity <= 0)) {
    return { error: { status: 422, message: '"quantity" must be greater than or equal to 1' } };
  }
  if (sales.some((sale) => !sale.productId)) {
    return { error: { status: 400, message: '"productId" is required' } };
  }
  if (sales.some((sale) => !sale.quantity)) {
    return { error: { status: 400, message: '"quantity" is required' } };
  }
  if (!sales.find((sale) => sale.productId)) {
    return { error: { status: 404, message: 'Sale not found' } };
  }
  return [];
};

module.exports = validateSale;