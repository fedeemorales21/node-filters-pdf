const indexController = {}

indexController.renderIndex = (req,res) => {
    res.render('products/index')
}

indexController.renderAdd = (req,res) => {
    res.render('products/add')
}


indexController.saveNewProduct = (req,res) => {
    res.render('products/add')
}

module.exports = indexController