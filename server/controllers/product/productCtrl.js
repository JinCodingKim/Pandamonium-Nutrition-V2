module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    const { type } = req.query;
    db.get_products([String(type)])
      .then(products => res.status(200).json(products))
      .catch(err => res.status(500).json(err));
  }
};
