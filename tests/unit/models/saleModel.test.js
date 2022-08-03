const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../helpers/connection');
const saleModel = require('../../../models/saleModel')

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

describe('Testa saleModels', () => {

  beforeEach(async () => {
    await sinon.stub(connection, 'execute').resolves(sales);
  });

  afterEach(async () => {
    await connection.execute.restore()
  })

  it('getAll', async () => {
    const response = await saleModel.getAll();
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('quantity');
    expect(response).to.have.a.property('productId');
  });

  it('getById', async () => {
    const response = await saleModel.getById(1);
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('quantity');
    expect(response).to.have.a.property('productId');
  });

  it('remove', async () => {
    const response = await saleModel.remove(1);
    expect(response).to.be.a('object');
  });
})
