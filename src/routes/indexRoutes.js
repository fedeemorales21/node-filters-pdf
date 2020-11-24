const { Router } = require('express')
const router = Router()

// import cosntroller
const { renderIndex, renderAdd, saveNewProduct } = require('../controllers/indexController')

router.get('/', renderIndex)
router.get('/add', renderAdd)
router.post('/add', saveNewProduct)

module.exports = router