const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../helpers/connection');
const productModel = require('../../../models/productModel')

const products = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje do Encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

describe('Testa productModels', () => {

  describe('getAll', () => {

    beforeEach(async () => {
      await sinon.stub(connection, 'execute').resolves([products]);
    });

    afterEach(async () => {
      await connection.execute.restore()
    })

    it('É um array?', async () => {
      const response = await productModel.getAll();
      expect(response).to.be.a('array');
    });
    it('É um array de objetos?', async () => {
      const response = await productModel.getAll();
      expect(response[1]).to.be.a('object');
    });
    it('O objeto possui a propriedade "name"?', async () => {
      const response = await productModel.getAll();
      expect(response[1]).to.have.a.property('name');
      
    });
    it('O objeto possui a propriedade "id"??', async () => {
      const response = await productModel.getAll();
      expect(response[1]).to.have.a.property('id');
    });
  });

  describe('getById', () => {

    beforeEach(async () => {
      await sinon.stub(connection, 'execute').resolves([products[0]]);
    });

    afterEach(async () => {
      await connection.execute.restore()
    })

    it('É um objeto?', async () => {
      const response = await productModel.getById(1);
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade "name"?', async () => {
      const response = await productModel.getById(1);
      expect(response).to.have.a.property('name');

    });
    it('Possui a propriedade "id"??', async () => {
      const response = await productModel.getById(1);
      expect(response).to.have.a.property('id');
    });
  });

  describe('add', () => {

    const mockPayloadProduct = {
      "name": "ProdutoX"
    }

    beforeEach(async () => {
      const execute = [{insertId: 1}]
      await sinon.stub(connection, 'execute').resolves(execute);
    });

    afterEach(async () => {
      await connection.execute.restore()
    })

    it('É um objeto?', async () => {
      const response = await productModel.add(mockPayloadProduct);
      expect(response).to.be.a('object');
    });
  });
})