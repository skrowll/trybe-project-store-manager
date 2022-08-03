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
  beforeEach(async () => {
    await sinon.stub(connection, 'execute').resolves(products);
  });

  afterEach(async () => {
    await connection.execute.restore()
  })

  describe('getAll', () => {
    it('É um objeto?', async () => {
      const response = await productModel.getAll();
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade "name"?', async () => {
      const response = await productModel.getAll();
      expect(response).to.have.a.property('name');
      
    });
    it('Possui a propriedade "id"??', async () => {
      const response = await productModel.getAll();
      expect(response).to.have.a.property('id');
    });
  });

  describe('getById', () => {
    it('É um objeto?', async () => {
      const response = await productModel.getById();
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade "name"?', async () => {
      const response = await productModel.getById();
      expect(response).to.have.a.property('name');

    });
    it('Possui a propriedade "id"??', async () => {
      const response = await productModel.getById();
      expect(response).to.have.a.property('id');
    });
  });
})