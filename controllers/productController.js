const productService = require('../services/productService');

const getAll = async (req, res) => {
  try {
    const result = await productService.getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Deu Ruim!' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productService.getAll(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Deu Ruim!' });
  }
};

module.exports = {
  getAll,
  getById,
};
