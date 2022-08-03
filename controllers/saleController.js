const saleService = require('../services/saleService');

const getAll = async (req, res) => {
  try {
    const result = await saleService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await saleService.getById(id);
    if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  try {
    const result = await saleService.update(sales, id);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await saleService.remove(id);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getById,
  update,
  remove,
};