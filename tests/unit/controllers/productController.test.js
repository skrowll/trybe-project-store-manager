const sinon = require('sinon');
const { expect } = require('chai');

const productController = require('../../../controllers/productController')
const productService = require('../../../services/productService')

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

const res = {};
const req = {};

describe('Testa productController', () => {

  describe('getAll', () => {

    beforeEach(async () => {
      sinon.stub(productService, 'getAll').resolves(products);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(async () => {
      productService.getAll.restore();
    });

    it('Retorna status 200?', async () => {
      await productController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um json?', async () => {
      await productController.getAll(req, res);
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
      await sinon.stub(productService, 'getById').resolves(product1);
    });

    afterEach(async () => {
      await productService.getById.restore();
    });

    it('Retorna status 200?', async () => {
      await productController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um json?', async () => {
      await productController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('add', () => {

    const newProduct = {
      'name': 'ProdutoX'
    };

    beforeEach(async () => {
      req.body = { 'name': 'ProdutoX' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await sinon.stub(productService, 'add').resolves(newProduct);
    });

    afterEach(async () => {
      await productService.add.restore()
    })

    it('Retorna status 201?', async () => {
      await productController.add(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });
  });
})
