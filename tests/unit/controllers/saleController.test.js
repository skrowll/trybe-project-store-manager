const sinon = require('sinon');
const { expect } = require('chai');

const saleController = require('../../../controllers/saleController')
const saleService = require('../../../services/saleService')

const sales = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const res = {};
const req = {};

describe('Testa saleController', () => {

  describe('getAll', () => {

    beforeEach(async () => {
      sinon.stub(saleService, 'getAll').resolves(sales);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(async () => {
      saleService.getAll.restore();
    });

    it('Retorna status 200?', async () => {
      await saleController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um json?', async () => {
      await saleController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('getById', () => {

    const product1 = {
      'id': 1,
      'name': 'Martelo de Thor',
    };

    beforeEach(async () => {
      req.params = '1';
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await sinon.stub(saleService, 'getById').resolves(product1);
    });

    afterEach(async () => {
      await saleService.getById.restore();
    });

    it('Retorna status 200?', async () => {
      await saleController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um json?', async () => {
      await saleController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
})
