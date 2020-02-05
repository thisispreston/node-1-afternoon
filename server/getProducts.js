const products = require('../products.json')

module.exports = {
  // getProducts: (req, res) => {
  //   res.status(200).send(products)
  // },
  getID: (req, res) => {
    let product = products.find(e => e.id === +req.params.id)
    if (!product) {
      return res.status(500).send('Item is not in the list.')
    }
    res.status(200).send(product)
  },
  getPrices: (req, res) => {
    if (req.query.price) {
      let product = products.filter(e => e.price >= +req.query.price)
      return res.status(200).send(product)
    }
    res.status(200).send(products)
  }
}

