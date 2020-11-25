const Product =  require('../models/Product')
const fs = require('fs')
const pdf = require('html-pdf')
const indexController = {}

indexController.renderIndex = async (req,res) => {
    const products = await Product.find().lean()
    res.render('products/index', { products })
}

indexController.renderAdd = (req,res) => {
    res.render('products/add')
}


indexController.saveNewProduct = async (req,res) => {
    const { name, description, price } = req.body
    if (!name || !description || !price) {
        res.render('products/add', { success: false })
    }

    const newProduct = new Product({name, description, price})
    await newProduct.save()
    res.redirect('add')
}


indexController.filteredResults = async (req,res) => {
    const { maxprice, order  } = req.body
    const products = await Product.find({ price: { $lte: maxprice } }).sort({$natural:order}).lean()
    res.render('products/filters', { products })
}


indexController.printResults =  (req,res) => {
    const { html } = req.body
    console.log(req.body)
    pdf.create(html).toFile('./report.pdf', (err, response) => {
        if (err) return console.log(err)
        res.json(response)
    })
}

module.exports = indexController