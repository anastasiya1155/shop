exports.getAddProduct = (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', { prods: [], pageTitle: 'Shop', path: '/' });
};
