import express from 'express';
import validate from 'express-validation';

import * as productController from '../controllers/product/product.controller';
import * as productValidator from '../controllers/product/product.validator';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post('/login', validate(userValidator.login), userController.login);
router.post(
  '/register',
  validate(userValidator.register),
  userController.register
);

// PRODUCTS
router.get('/products', productController.findAll);
router.get('/products/:id', productController.findOne);
router.put(
  '/products',
  validate(productValidator.createProduct),
  productController.createProduct
);
router.post(
  '/products/:id',
  validate(productValidator.udpateProduct),
  productController.updateProduct
);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
