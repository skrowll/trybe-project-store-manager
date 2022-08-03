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

  it('getAll', async () => {
    const response = await productModel.getAll();
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name');
    expect(response).to.have.a.property('id');
  });

  it('getById', async () => {
    const response = await productModel.getById(1);
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name');
    expect(response).to.have.a.property('id');
  });

  it('add', async () => {
    const response = await productModel.add('ProdutoX');
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name').to.be.equal('ProdutoX');
  });

  it('update', async () => {
    const response = await productModel.update(1, 'ProdutoX');
    expect(response).to.be.a('object');
  });

  it('remove', async () => {
    const response = await productModel.remove(1);
    expect(response).to.be.a('object');
  });
})
