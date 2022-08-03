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

describe('Testa productController', () => {

  describe('getAll', () => {

    beforeEach(async () => {
      await sinon.stub(productController, 'getAll').resolves(products);
    });

    afterEach(async () => {
      await productController.getAll.restore()
    })

    it('É um array?', async () => {
      const response = await productController.getAll();
      expect(response).to.be.a('array');
    });
    it('É um array de objetos?', async () => {
      const response = await productController.getAll();
      expect(response[1]).to.be.a('object');
    });
    it('O objeto possui a propriedade "name"?', async () => {
      const response = await productController.getAll();
      expect(response[1]).to.have.a.property('name');

    });
    it('O objeto possui a propriedade "id"??', async () => {
      const response = await productController.getAll();
      expect(response[1]).to.have.a.property('id');
    });
  });

  describe('getById', () => {

    const product1 = {
      "id": 1,
      "name": "Martelo de Thor",
    };

    beforeEach(async () => {
      await sinon.stub(productController, 'getById').resolves(product1);
    });

    afterEach(async () => {
      await productController.getById.restore()
    })

    it('É um objeto?', async () => {
      const response = await productController.getById(1);
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade "name"?', async () => {
      const response = await productController.getById(1);
      expect(response).to.have.a.property('name');

    });
    it('Possui a propriedade "id"??', async () => {
      const response = await productController.getById(1);
      expect(response).to.have.a.property('id');
    });
  });

  describe('add', () => {

    const newProduct = {
      name: 'ProdutoX'
    };

    beforeEach(async () => {
      const execute = [{ insertId: 1 }]
      await sinon.stub(productController, 'add').resolves(newProduct);
    });

    afterEach(async () => {
      await productController.add.restore()
    })

    it('É um objeto?', async () => {
      const response = await productController.add('ProdutoX');
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade name igual à que foi passada?', async () => {
      const response = await productController.add('ProdutoX');
      expect(response).to.have.a.property('name').to.be.equal('ProdutoX');
    });
  });

  describe('update', () => {

    const attProduct = {
      name: 'Martelo do Batman'
    };

    beforeEach(async () => {
      await sinon.stub(productController, 'update').resolves(attProduct);
    });

    afterEach(async () => {
      await productController.update.restore()
    })

    it('É um objeto?', async () => {
      const response = await productController.update(1, 'Martelo do Batman');
      expect(response).to.be.a('object');
    });
  });
})
