const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', { prods: [], pageTitle: 'Shop', path: '/' });
});

module.exports = router;
