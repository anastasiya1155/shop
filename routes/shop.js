const express = require('express');
import productsController from '../controllers/products';

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
