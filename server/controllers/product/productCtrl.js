module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    const { type } = req.query;
    db.get_products(String(type))
      .then(products => res.status(200).json(products))
      .catch(err => res.status(500).json(err));
  },
  getProductDetail: (req, res) => {
    const db = req.app.get("db");
    const { name } = req.params;
    db.get_product_detail(name.split("%20").join(" "))
      .then(product => res.status(200).json(product[0]))
      .catch(err => res.status(500).json(err));
  }
};
