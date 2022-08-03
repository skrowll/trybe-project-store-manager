const sinon = require('sinon');
const { expect } = require('chai');

const productModel = require('../../../models/productModel')
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

describe('Testa productService', () => {

  describe('getAll', () => {

    beforeEach(async () => {
      await sinon.stub(productModel, 'getAll').resolves(products);
    });

    afterEach(async () => {
      await productModel.getAll.restore()
    })

    it('É um array?', async () => {
      const response = await productService.getAll();
      expect(response).to.be.a('array');
    });
    it('É um array de objetos?', async () => {
      const response = await productService.getAll();
      expect(response[1]).to.be.a('object');
    });
    it('O objeto possui a propriedade "name"?', async () => {
      const response = await productService.getAll();
      expect(response[1]).to.have.a.property('name');

    });
    it('O objeto possui a propriedade "id"??', async () => {
      const response = await productService.getAll();
      expect(response[1]).to.have.a.property('id');
    });
  });

  describe('getById', () => {

    const product1 = {
        'id': 1,
        'name': 'Martelo de Thor',
      };

    beforeEach(async () => {
      await sinon.stub(productModel, 'getById').resolves(product1);
    });

    afterEach(async () => {
      await productModel.getById.restore()
    })

    it('É um objeto?', async () => {
      const response = await productService.getById(1);
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade "name"?', async () => {
      const response = await productService.getById(1);
      expect(response).to.have.a.property('name');

    });
    it('Possui a propriedade "id"??', async () => {
      const response = await productService.getById(1);
      expect(response).to.have.a.property('id');
    });
  });

  describe('getByName', () => {

    const name = 'Martelo';

    beforeEach(async () => {
      await sinon.stub(productModel, 'getByName').resolves(products);
    });

    afterEach(async () => {
      await productModel.getByName.restore()
    })

    it('O nome é encontrado?', async () => {
      const response = await productService.getByName(name);
      expect(response.find((e) => e).name).to.includes(name);
    });
  });

  describe('add', () => {

    const newProduct = {
      'name': 'ProdutoX'
    };

    beforeEach(async () => {
      const execute = [{ insertId: 1 }]
      await sinon.stub(productModel, 'add').resolves(newProduct);
    });

    afterEach(async () => {
      await productModel.add.restore()
    })

    it('É um objeto?', async () => {
      const response = await productService.add('ProdutoX');
      expect(response).to.be.a('object');
    });
    it('Possui a propriedade name igual à que foi passada?', async () => {
      const response = await productService.add('ProdutoX');
      expect(response).to.have.a.property('name').to.be.equal('ProdutoX');
    });
  });

  describe('update', () => {

    const attProduct = {
      'name': 'Martelo do Batman'
    };

    beforeEach(async () => {
      await sinon.stub(productModel, 'update').resolves(attProduct);
    });

    afterEach(async () => {
      await productModel.update.restore()
    })

    it('É um objeto?', async () => {
      const response = await productService.update(1, 'Martelo do Batman');
      expect(response).to.be.a('object');
    });
  });
})
