const sinon = require('sinon');
const { expect } = require('chai');

const saleModel = require('../../../models/saleModel')
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

describe('Testa saleService', () => {

  describe('getAll', () => {

    beforeEach(async () => {
      await sinon.stub(saleModel, 'getAll').resolves(sales);
    });

    afterEach(async () => {
      await saleModel.getAll.restore()
    })

    it('É um array?', async () => {
      const response = await saleService.getAll();
      expect(response).to.be.a('array');
    });
    it('É um array de objetos?', async () => {
      const response = await saleService.getAll();
      expect(response[1]).to.be.a('object');
    });
    it('O objeto possui a propriedade "productId"?', async () => {
      const response = await saleService.getAll();
      expect(response[1]).to.have.a.property('productId');

    });
    it('O objeto possui a propriedade "quantity"??', async () => {
      const response = await saleService.getAll();
      expect(response[1]).to.have.a.property('quantity');
    });
  });

  describe('getById', () => {

    const sale1 = {
      "productId": 1,
      "quantity": 1
    }

    beforeEach(async () => {
      await sinon.stub(saleModel, 'getById').resolves(sale1);
    });

    afterEach(async () => {
      await saleModel.getById.restore()
    })

    it('É um objeto?', async () => {
      const response = await saleService.getById(1);
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade "productId"?', async () => {
      const response = await saleService.getById(1);
      expect(response).to.have.a.property('productId');

    });
    it('Possui a propriedade "quantity"??', async () => {
      const response = await saleService.getById(1);
      expect(response).to.have.a.property('quantity');
    });
  });
})
